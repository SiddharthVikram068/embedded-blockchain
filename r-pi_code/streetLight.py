import RPi.GPIO as GPIO
import time

# Pin configuration
SW420_PIN = 17
INPUT_PIN = 4

# Set up the GPIO mode
GPIO.setmode(GPIO.BCM)
GPIO.setup(SW420_PIN, GPIO.IN)
GPIO.setup(INPUT_PIN, GPIO.IN)

try:
    while True:
        # Read the SW420 sensor input
        if GPIO.input(SW420_PIN) == GPIO.LOW:
            print("No Vibration detected!")
        else:
            print("Vibration detected.")

        # Read the input pin state
        input_state = GPIO.input(INPUT_PIN)
        if(input_state == 1):
          print("Light Malfunction")
        
        # Wait for a short period
        time.sleep(0.1)
except KeyboardInterrupt:
    print("Program stopped by User")
    GPIO.cleanup()