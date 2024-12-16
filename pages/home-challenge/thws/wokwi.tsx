import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageTitle from '../../../components/PageTitle';

interface PageProps {
  isMobile: boolean;
}

const Page: React.FC<PageProps> = ({ isMobile }) => {
  const pageTitle = 'WOKWI Results from THWS Students';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <PageTitle title={pageTitle} />
      <div>
        <h1>{pageTitle}</h1>
        <h2>Project Descriptions</h2>
        {isMobile ? (
          <p>This is a mobile view.</p>
        ) : (
          <p>This is a desktop view.</p>
        )}
        <ul>
          <li>
            <a href="https://wokwi.com/projects/415254747927803905">
              Positioning a cursor with confirmation
            </a>
            <br />
            Yannick's project involves creating a system to position a cursor on a display and confirm its position.
          </li>
          <li>
            <a href="https://wokwi.com/projects/414878963606090753">
              Simon Says Game with C3-Mini
            </a>
            <br />
            Felix's project is a recreation of the classic "Simon Says" game using a C3-Mini microcontroller.
          </li>
          <li>
            <a href="https://wokwi.com/projects/414266527615099905">
              C3-Mini THWS-Logo with OLED Display
            </a>
            <br />
            Ramazan's project displays the THWS (Technische Hochschule Würzburg-Schweinfurt) logo on an OLED screen.
          </li>
          <li>
            <a href="https://wokwi.com/projects/385987811439126529">
              Compass on Display by Potentiometer
            </a>
            <br />
            Loris created a project where a potentiometer is used to simulate a compass, displaying the direction on a screen.
          </li>
          <li>
            <a href="https://wokwi.com/projects/414344951640901633">
              DHT22 Alarm for Temperatures above 25°C
            </a>
            <br />
            Luisa's project uses a DHT22 sensor to monitor temperature and triggers an alarm if the temperature exceeds 25°C.
          </li>
          <li>
            <a href="https://wokwi.com/projects/416265055337216001">
              Two LEDs with Button
            </a>
            <br />
            Maximilian's project involves controlling two LEDs with a button.
          </li>
          <li>
            <a href="https://wokwi.com/projects/414548843141306369">
              DHT22-Uno-LiquidCrystal-Display
            </a>
            <br />
            Moritz's project displays temperature and humidity readings from a DHT22 sensor on a LiquidCrystal display using an Arduino Uno.
          </li>
          <li>
            <a href="https://wokwi.com/projects/414884367510161409">
              Manual People Counter (Button)
            </a>
            <br />
            Johannes created a manual people counter using a button to increment the count, which is displayed on a screen.
          </li>
          <li>
            <a href="https://wokwi.com/projects/416753739180109825">
              Random dice generator
            </a>
            <br />
            Artur's project simulates a dice roll, generating random numbers between 1 and 6, and displaying the result.
          </li>
          <li>
            <a href="https://wokwi.com/projects/414634191354576897">
              Arduino Uno LCD with THWS letters for random numbers
            </a>
            <br />
            Anna-Lena's project displays random numbers on an LCD screen, with the letters "THWS" likely incorporated into the display.
          </li>
          <li>
            <a href="https://wokwi.com/projects/276825819240727048">
              Arduino Calculator
            </a>
            <br />
            Daniel's project is a basic calculator implemented with an Arduino, capable of performing simple arithmetic operations.
          </li>
          <li>
            <a href="https://wokwi.com/projects/414548843141306369">
              Arduino Uno Humidity & Temp. Monitoring Station
            </a>
            <br />
            Max's project monitors and displays humidity and temperature using an Arduino Uno and appropriate sensors.
          </li>
          <li>
            <a href="https://wokwi.com/projects/414832473351403521">
              Electronic lock: Find correct sequence to get green
            </a>
            <br />
            Jonas's project is an electronic lock that requires the user to input the correct sequence to unlock, indicated by a green light.
          </li>
          <li>
            <a href="https://wokwi.com/projects/321525495180034642">
              NTP Time & Date UTC Server
            </a>
            <br />
            Fabienne's project involves setting up a Network Time Protocol (NTP) server to provide accurate time and date information in UTC.
          </li>
          <li>
            <a href="https://wokwi.com/projects/415070577191291905">
              Red-LED-On-Off-Momentary-Switch
            </a>
            <br />
            Maximilian's project controls a red LED with a momentary switch.
          </li>
          <li>
            <a href="https://wokwi.com/projects/415033768149590017">
              Don't panic display
            </a>
            <br />
            Cagri's project likely displays a reassuring message, "Don't panic," on a screen.
          </li>
          <li>
            <a href="https://wokwi.com/projects/415724474838705153">
              Arduino Uno KFZ-Blinker with alarm button
            </a>
            <br />
            Leonardo's project simulates a car blinker (indicator) system with an alarm button using an Arduino Uno.
          </li>
          <li>
            <a href="https://wokwi.com/projects/415195153863784449">
              Arduino Uni Würfel (Dice)
            </a>
            <br />
            Tobias's project is another dice simulator, generating random numbers and displaying them.
          </li>
          <li>
            <a href="https://wokwi.com/projects/415083424361074689">
              PIR-triggered Schranke with green LED
            </a>
            <br />
            Valentin's project uses a Passive Infrared (PIR) sensor to trigger a barrier (Schranke) and light up a green LED when motion is detected.
          </li>
          <li>
            <a href="https://wokwi.com/projects/348849468083274322">
              Pong Game
            </a>
            <br />
            Max's project is a recreation of the classic Pong game.
          </li>
          <li>
            <a href="https://wokwi.com/projects/414919215451341825">
              Binary Display with 3 LEDs for Potentiometer
            </a>
            <br />
            Lukas's project uses a potentiometer to control a binary display with three LEDs.
          </li>
          <li>
            <a href="https://wokwi.com/projects/414909175784172545">
              Breathing LED
            </a>
            <br />
            Adrian's project involves an LED that gradually changes brightness, simulating a "breathing" effect.
          </li>
          <li>
            <a href="https://wokwi.com/projects/414906550842349569">
              Pulsating RGB-LED
            </a>
            <br />
            Jan's project controls an RGB LED to create a pulsating effect, changing colors smoothly.
          </li>
          <li>
            <a href="https://wokwi.com/projects/415874848444058625">
              Traffic-Lights
            </a>
            <br />
            Markus's project simulates a traffic light system.
          </li>
          <li>
            <a href="https://wokwi.com/projects/414999952624074753">
              DHT22_C3-Mini_0.96-OLED
            </a>
            <br />
            Jonas's project displays temperature and humidity readings from a DHT22 sensor on a 0.96-inch OLED screen using a C3-Mini microcontroller.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Page;
