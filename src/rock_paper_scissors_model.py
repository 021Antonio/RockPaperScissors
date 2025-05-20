import cv2
import mediapipe as mp
import random
import time

# Inicializa MediaPipe
mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils

# Função para detectar dedos levantados
def detectar_dedos(hand_landmarks):
    dedos = []
    tips = [4, 8, 12, 16, 20]

    # Polegar
    if hand_landmarks.landmark[4].x < hand_landmarks.landmark[3].x:
        dedos.append(1)
    else:
        dedos.append(0)

    # Indicador, médio, anelar, mindinho
    for tip in tips[1:]:
        if hand_landmarks.landmark[tip].y < hand_landmarks.landmark[tip - 2].y:
            dedos.append(1)
        else:
            dedos.append(0)

    return dedos

# Classifica gesto com base nos dedos
def classificar_gesto(dedos):
    if dedos == [0, 0, 0, 0, 0]:
        return "Pedra"
    elif dedos == [1, 1, 1, 1, 1]:
        return "Papel"
    elif dedos[1] == 1 and dedos[2] == 1 and dedos[3] == 0 and dedos[4] == 0:
        return "Tesoura"
    elif dedos == [1, 0, 0, 0, 0]:
        return "Joinha"
    else:
        return "Outro"

# Define o vencedor
def determinar_vencedor(player, cpu):
    if player == cpu:
        return "Empate!"
    elif (player == "Pedra" and cpu == "Tesoura") or \
         (player == "Papel" and cpu == "Pedra") or \
         (player == "Tesoura" and cpu == "Papel"):
        return "Voce ganhou!"
    else:
        return "Voce perdeu!"

# Inicializa webcam
cap = cv2.VideoCapture(0)

with mp_hands.Hands(
    static_image_mode=False,
    max_num_hands=1,
    min_detection_confidence=0.7,
    min_tracking_confidence=0.7) as hands:

    tempo_inicial = time.time()
    tempo_fim_partida = None
    jogada_usuario = None
    jogada_cpu = None
    resultado_final = ""

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        frame = cv2.flip(frame, 1)
        imagem_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        resultados = hands.process(imagem_rgb)

        tempo_decorrido = int(time.time() - tempo_inicial)
        contagem = max(3 - tempo_decorrido, 0)

        cv2.putText(frame, f"Mostre o gesto em: {contagem}",
                    (10, 50), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (0, 0, 255), 3)

        # Sempre desenha os pontos da mão
        if resultados.multi_hand_landmarks:
            for hand_landmarks in resultados.multi_hand_landmarks:
                mp_drawing.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)

                if contagem == 0:
                    dedos = detectar_dedos(hand_landmarks)
                    gesto_atual = classificar_gesto(dedos)

                    if jogada_usuario is None:
                        jogada_usuario = gesto_atual
                        jogada_cpu = random.choice(["Pedra", "Papel", "Tesoura"])
                        resultado_final = determinar_vencedor(jogada_usuario, jogada_cpu)
                        tempo_fim_partida = time.time()
                    else:
                        if gesto_atual == "Joinha" and tempo_fim_partida and (time.time() - tempo_fim_partida > 3):
                            jogada_usuario = None
                            jogada_cpu = None
                            resultado_final = ""
                            tempo_inicial = time.time()
                            tempo_fim_partida = None


        # Exibe resultado na tela
        if jogada_usuario:
            cv2.putText(frame, f"Voce: {jogada_usuario}", (10, 100), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (255, 255, 0), 3)
            cv2.putText(frame, f"Computador: {jogada_cpu}", (10, 150), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (255, 255, 0), 3)
            cv2.putText(frame, resultado_final, (10, 200), cv2.FONT_HERSHEY_SIMPLEX, 1.5, (0, 255, 0), 4)
            cv2.putText(frame, " reiniciar", (10, 240), cv2.FONT_HERSHEY_SIMPLEX, 1, (200, 200, 200), 2)

        # Mostra imagem
        cv2.imshow("Pedra, Papel ou Tesoura", frame)

        key = cv2.waitKey(1)
        if key == 27:  # ESC
            break

cap.release()
cv2.destroyAllWindows()
