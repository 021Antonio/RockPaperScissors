# -RockPaperScissors
 Rock, Paper, Scissors with Computer Vision A Python project that uses the webcam to recognize rock, paper, and scissors hand gestures in real time using OpenCV. The player competes against the computer, which makes a random move and displays the round result.

<iframe width="560" height="315" src="https://www.youtube.com/embed/aiB8lnUhGfI?si=4E37yUUrp8dP3mN-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## How it works

- Captures video from the webcam.

- Uses MediaPipe Hands to detect finger positions.

- Interprets hand gestures as Rock, Paper, or Scissors based on which fingers are up.

- Displays the computer’s move and determines the winner.

- A thumbs up gesture restarts the game.

## Technologies used

- Python

- OpenCV (for video capture and display)

- MediaPipe (for hand tracking)

- random (for computer move selection)

- time (for timing logic)

## How to run

1. Clone the [repository](https://github.com/021Antonio/RockPaperScissors)

```Git
git clone https://github.com/021Antonio/RockPaperScissors.git
```

2. Enter the right directory

```Git
cd RockPaperScissors/src
```

3. Create a venv folder

```Python
python -m venv venv
```

4. Install all dependencies

```Python
pip install -r requirements.txt
```

5. Run the project

```Python
python rock_paper_scissors_model.py
```

## Instructions

- Show your hand to the camera.

- Make the gesture when the countdown reaches 0.

- See the result.

- Show a thumbs up (👍) to restart the round.