import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageTitle from '../../../components/PageTitle';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'WOKWI Results from THWS Students';
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Carenuity ChipGlobe Electronics Embedded Systems"
        />
        <meta
          name="description"
          content={`We're Delivering Peace-in-Mind by Vital and Environmental Sensing and Care that you See what No Else will See.`}
        />
        <title>{pageTitle}</title>
      </Head>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Descriptions</title>
</head>
<body>
    <h2><a href="https://wokwi.com/projects/415254747927803905">Positioning a cursor with confirmation</a></h2>
    <p>Yannick's project involves creating a system to position a cursor on a display and confirm its position. This likely uses buttons or a joystick for input, allowing precise control over the cursor's location, which can be useful for various user interface applications.</p>

    <h2><a href="https://wokwi.com/projects/414878963606090753">Simon Says Game with C3-Mini</a></h2>
    <p>Felix's project is a recreation of the classic "Simon Says" game using a C3-Mini microcontroller. The game tests memory by requiring players to repeat increasingly complex sequences of lights and sounds. This project demonstrates the use of LEDs and sound modules to create an engaging interactive game.</p>

    <h2><a href="https://wokwi.com/projects/414266527615099905">C3-Mini THWS-Logo with OLED Display</a></h2>
    <p>Ramazan's project displays the THWS (Technische Hochschule Würzburg-Schweinfurt) logo on an OLED screen using a C3-Mini microcontroller. This project showcases how to use graphic displays to render images and logos, which can be applied in various branding and information display systems.</p>

    <h2><a href="https://wokwi.com/projects/385987811439126529">Compass on Display by Potentiometer</a></h2>
    <p>Loris created a project where a potentiometer is used to simulate a compass, displaying the direction on a screen. This project is an excellent example of how analog inputs can be used to control digital displays, simulating real-world instruments.</p>

    <h2><a href="https://wokwi.com/projects/414344951640901633">DHT22 Alarm for Temperatures above 25°C</a></h2>
    <p>Luisa's project uses a DHT22 sensor to monitor temperature and triggers an alarm if the temperature exceeds 25°C. This project is useful for creating environmental monitoring systems that can alert users to potentially hazardous conditions.</p>

    <h2><a href="https://wokwi.com/projects/416265055337216001">Two LEDs with Button</a></h2>
    <p>Maximilian's project involves controlling two LEDs with a button, demonstrating basic input and output control with a microcontroller. This simple yet fundamental project is great for beginners learning about digital electronics and microcontroller programming.</p>

    <h2><a href="https://wokwi.com/projects/414548843141306369">DHT22-Uno-LiquidCrystal-Display</a></h2>
    <p>Moritz's project displays temperature and humidity readings from a DHT22 sensor on a LiquidCrystal display using an Arduino Uno. This project is a practical application of sensor data visualization, useful in weather stations and home automation systems.</p>

    <h2><a href="https://wokwi.com/projects/414884367510161409">Manual People Counter (Button)</a></h2>
    <p>Johannes created a manual people counter using a button to increment the count, which is displayed on a screen. This project can be used in various settings such as events or retail stores to keep track of the number of people entering or exiting.</p>

    <h2><a href="https://wokwi.com/projects/416753739180109825">Random dice generator</a></h2>
    <p>Artur's project simulates a dice roll, generating random numbers between 1 and 6, and displaying the result. This project is a fun way to learn about random number generation and can be used in games and simulations.</p>

    <h2><a href="https://wokwi.com/projects/414634191354576897">Arduino Uno LCD with THWS letters for random numbers</a></h2>
    <p>Anna-Lena's project displays random numbers on an LCD screen, with the letters "THWS" likely incorporated into the display. This project combines random number generation with custom text display, useful for educational tools and interactive displays.</p>

    <h2><a href="https://wokwi.com/projects/276825819240727048">Arduino Calculator</a></h2>
    <p>Daniel's project is a basic calculator implemented with an Arduino, capable of performing simple arithmetic operations. This project demonstrates how to create a functional user interface for mathematical calculations using a microcontroller.</p>

    <h2><a href="https://wokwi.com/projects/414548843141306369">Arduino Uno Humidity & Temp. Monitoring Station</a></h2>
    <p>Max's project monitors and displays humidity and temperature using an Arduino Uno and appropriate sensors. This project is ideal for creating a home weather station or environmental monitoring system.</p>

    <h2><a href="https://wokwi.com/projects/414832473351403521">Electronic lock: Find correct sequence to get green</a></h2>
    <p>Jonas's project is an electronic lock that requires the user to input the correct sequence to unlock, indicated by a green light. This project is a practical example of security systems and user input validation.</p>

    <h2><a href="https://wokwi.com/projects/321525495180034642">NTP Time & Date UTC Server</a></h2>
    <p>Fabienne's project involves setting up a Network Time Protocol (NTP) server to provide accurate time and date information in UTC. This project is useful for synchronizing clocks and devices over a network.</p>

    <h2><a href="https://wokwi.com/projects/415070577191291905">Red-LED-On-Off-Momentary-Switch</a></h2>
    <p>Maximilian's project controls a red LED with a momentary switch, demonstrating basic switch control. This project is a simple yet effective way to learn about digital inputs and outputs.</p>

    <h2><a href="https://wokwi.com/projects/415033768149590017">Don't panic display</a></h2>
    <p>Cagri's project likely displays a reassuring message, "Don't panic," on a screen, possibly as a humorous or motivational tool. This project can be used to create custom messages for various applications.</p>

    <h2><a href="https://wokwi.com/projects/415724474838705153">Arduino Uno KFZ-Blinker with alarm button</a></h2>
    <p>Leonardo's project simulates a car blinker (indicator) system with an alarm button using an Arduino Uno. This project is useful for learning about automotive electronics and creating signaling systems.</p>

    <h2><a href="https://wokwi.com/projects/415195153863784449">Arduino Uni Würfel (Dice)</a></h2>
    <p>Tobias's project is another dice simulator, generating random numbers and displaying them, likely on an LED or LCD display. This project is great for games and learning about random number generation.</p>

    <h2><a href="https://wokwi.com/projects/415083424361074689">PIR-triggered Schranke with green LED</a></h2>
    <p>Valentin's project uses a Passive Infrared (PIR) sensor to trigger a barrier (Schranke) and light up a green LED when motion is detected. This project is useful for creating automated entry systems and motion detection.</p>

    <h2><a href="https://wokwi.com/projects/348849468083274322">Pong Game</a></h2>
    <p>Max's project is a recreation of the classic Pong game, likely using an Arduino and a display to simulate the game. This project is a fun way to learn about game development and display control.</p>

    <h2><a href="https://wokwi.com/projects/414919215451341825">Binary Display with 3 LEDs for Potentiometer</a></h2>
    <p>Lukas's project uses a potentiometer to control a binary display with three LEDs, demonstrating basic analog-to-digital conversion. This project is useful for understanding binary representation and analog input.</p>

    <h2><a href="https://wokwi.com/projects/414909175784172545">Breathing LED</a></h2>
    <p>Adrian's project involves an LED that gradually changes brightness, simulating a "breathing" effect. This project is great for learning about PWM (Pulse Width Modulation) and creating visual effects.</p>

    <h2><a href="https://wokwi.com/projects/414906550842349569">Pulsating RGB-LED</a></h2>
    <p>Jan's project controls an RGB LED to create a pulsating effect, changing colors smoothly. This project demonstrates advanced LED control and color mixing.</p>

    <h2><a href="https://wokwi.com/projects/415874848444058625">Traffic-Lights</a></h2>
    <p>Markus's project simulates a traffic light system, likely using LEDs to represent the red, yellow, and green lights. This project is useful for learning about state machines and timing control.</p>

    <h2><a href="https://wokwi.com/projects/414999952624074753">DHT22_C3-Mini_0.96-OLED</a></h2>
    <p>Jonas's project displays temperature and humidity readings from a DHT22 sensor on a 0.96-inch OLED screen using a C3-Mini microcontroller. This project is ideal for creating compact and efficient environmental monitoring systems.</p>
</body>
</html>
export default Page;
