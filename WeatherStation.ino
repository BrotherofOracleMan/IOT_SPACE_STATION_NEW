
#include <Wire.h>
#include <SPI.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>

#define BME_SCK 13
//#define BME_MISO 12
#define BME_MOSI 11
//#define BME_CS 10
#define SEALEVELPRESSURE_HPA (1013.25)
Adafruit_BME280 bme; // I2C
int photocellPin = 1;     // the cell and 10K pulldown are connected to a0
int photocellReading;     // the analog reading from the analog resistor divider

unsigned long delayTime;

void setup() {
    Serial.begin(9600);
    Serial.println(F("BME280 test"));

 Serial.begin(9600);
 pinMode(2, OUTPUT);
    bool status;
    
    // default settings
    status = bme.begin();  
    if (!status) {
        Serial.println("Could not find a valid BME280 sensor, check wiring!");
        while (1);
    }
    
    Serial.println(" Test ");
    delayTime = 1000;

    Serial.println();

    delay(100); // let sensor boot up
}


void loop() { 
    printValues();
    delay(delayTime);
    
}


void printValues() {

// For Rain
 if(analogRead(0)<300) Serial.println("Heavy Rain");
 else if(analogRead(0)<500) Serial.println("Moderate Rain");
 else Serial.println("No Rain");

// For Light detection
photocellReading = analogRead(photocellPin);  
 
  Serial.print("Light Detected = ");
  Serial.print(photocellReading);     // the raw analog reading
 
  // Thresholds for light detection
  if (photocellReading < 10) {
    Serial.println(" - Dark");
  } else if (photocellReading < 200) {
    Serial.println(" - Dim");
  } else if (photocellReading < 500) {
    Serial.println(" - Light");
  } else if (photocellReading < 800) {
    Serial.println(" - Bright");
  } else {
    Serial.println(" - Very bright");
  }
//
 delay(250);
    Serial.print("Temperature = ");
    Serial.print(bme.readTemperature());
    Serial.println(" *C");

    Serial.print("Pressure = ");

    Serial.print(bme.readPressure() / 100.0F);
    Serial.println(" hPa");

    Serial.print("Approx. Altitude = ");
    Serial.print(bme.readAltitude(SEALEVELPRESSURE_HPA));
    Serial.println(" m");

    Serial.print("Humidity = ");
    Serial.print(bme.readHumidity());
    Serial.println(" %");

    Serial.println();
}
