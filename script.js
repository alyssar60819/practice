// Random target color
var Red = Math.random(50, 255);
var Green = Math.random(50, 255);
var Blue = Math.random(50, 255);


// Water color
var newRed = 210;
var newGreen = 215;
var newBlue = 250;


// Button enlargement
var cupWidth = 5;
var barWidth = 5;
var redWidth = 3;
var greenWidth = 3;
var blueWidth = 3;
var blackWidth = 3;
var whiteWidth = 3;
var playWidth = 45;
var arrowWidth = 8;


// Current paint color
var isRed = false;
var isGreen = false;
var isBlue = false;
var isBlack = false;
var isWhite = false;


// Dropper paint color
var paint1 = 210;
var paint2 = 215;
var paint3 = 250;


// Color accuracy
var goodRed = false;
var goodGreen = false;
var goodBlue = false;


// Accuracy display
var display1 = 100;
var display2 = 100;


// Score display and timebar
var score = 0;
var time = 595;
var end = false;


draw = function() {


   background(255, 255, 255);


   // Color square
   fill(Red, Green, Blue);
   stroke(0, 0, 0);
   strokeWeight(barWidth);
   rect(3, 440, 592, 156, 5);
   fill(0, 0, 0);
   textSize(50);
   text("Make This Color", 115, 510);
   textSize(30);
   text("Next Level", 195, display1+555);
   text("Keep Trying!", 220, display2+555);
   strokeWeight(10);
   line(350, display1+545, 410, display1+545);
   line(400, display1+535, 410, display1+545);
   line(400, display1+555, 410, display1+545);


   // Cup and water
   fill(255, 255, 255);
   stroke(0, 0, 0);
   strokeWeight(cupWidth);
   quad(225, 432, 375, 432, 400, 200, 200, 200);
   fill(newRed, newGreen, newBlue);
   noStroke();
   quad(227, 430, 373, 430, 393, 246, 208, 252);
   rect(220, 240, 165, 20);
   fill(255, 255, 255);
   stroke(0, 0, 0);
   arc(215, 210, 80, 80, 50, 100);
   arc(270, 210, 80, 80, 50, 133);
   arc(325, 210, 80, 80, 50, 133);
   arc(380, 210, 80, 80, 75, 133);


   // Score display
   noFill();
   stroke(0, 0, 0);
   strokeWeight(5);
   rect(445, 300, 100, 100, 20);
   fill(0, 0, 0);
   textSize(60);
   text(score, 455, 370);
   textSize(30);
   text("Score:", 450, 290);


   // Time bar
   fill(210, 215, 250);
   stroke(0, 0, 0);
   strokeWeight(5);
   rect(2, 127, time, 50, 20);
   if(time>0) {
       time-=0.05;
   }
   if(time<0.5) {
       end = true;
   }


   // Red paint blob
   fill(255, 0, 0);
   stroke(0, 0, 0);
   strokeWeight(redWidth);
   ellipse(55, 70, 80, 80);
   ellipse(85, 39, 30, 30);
   ellipse(35, 41, 20, 20);
   ellipse(58, 44, 40, 50);
   ellipse(83, 68, 50, 50);
   ellipse(32, 58, 35, 35);
   ellipse(24, 81, 30, 30);
   ellipse(77, 95, 30, 30);
   ellipse(47, 90, 50, 50);
   noStroke();
   ellipse(85, 39, 26, 26);
   ellipse(35, 41, 16, 16);
   ellipse(83, 68, 46, 46);
   ellipse(24, 81, 26, 26);
   ellipse(55, 70, 76, 76);
   noFill();
   stroke(255, 255, 255);
   strokeWeight(5);
   arc(42, 62, 35, 35, 170, 235);


   // Green paint blob
   fill(38, 224, 38);
   stroke(0, 0, 0);
   strokeWeight(greenWidth);
   ellipse(175, 70, 80, 80);
   ellipse(205, 39, 30, 30);
   ellipse(155, 41, 20, 20);
   ellipse(178, 44, 40, 50);
   ellipse(203, 68, 50, 50);
   ellipse(152, 58, 35, 35);
   ellipse(144, 81, 30, 30);
   ellipse(197, 95, 30, 30);
   ellipse(167, 90, 50, 50);
   noStroke();
   ellipse(205, 39, 26, 26);
   ellipse(155, 41, 16, 16);
   ellipse(203, 68, 46, 46);
   ellipse(144, 81, 26, 26);
   ellipse(175, 70, 76, 76);
   noFill();
   stroke(255, 255, 255);
   strokeWeight(5);
   arc(162, 62, 35, 35, 170, 235);


   // Blue paint blob
   fill(0, 0, 255);
   stroke(0, 0, 0);
   strokeWeight(blueWidth);
   ellipse(295, 70, 80, 80);
   ellipse(325, 39, 30, 30);
   ellipse(275, 41, 20, 20);
   ellipse(298, 44, 40, 50);
   ellipse(323, 68, 50, 50);
   ellipse(272, 58, 35, 35);
   ellipse(264, 81, 30, 30);
   ellipse(317, 95, 30, 30);
   ellipse(287, 90, 50, 50);
   noStroke();
   ellipse(325, 39, 26, 26);
   ellipse(275, 41, 16, 16);
   ellipse(323, 68, 46, 46);
   ellipse(264, 81, 26, 26);
   ellipse(295, 70, 76, 76);
   noFill();
   stroke(255, 255, 255);
   strokeWeight(5);
   arc(282, 62, 35, 35, 170, 235);


   // Black paint blob
   fill(36, 36, 36);
   stroke(0, 0, 0);
   strokeWeight(blackWidth);
   ellipse(415, 70, 80, 80);
   ellipse(445, 39, 30, 30);
   ellipse(395, 41, 20, 20);
   ellipse(418, 44, 40, 50);
   ellipse(443, 68, 50, 50);
   ellipse(392, 58, 35, 35);
   ellipse(384, 81, 30, 30);
   ellipse(437, 95, 30, 30);
   ellipse(407, 90, 50, 50);
   noStroke();
   ellipse(445, 39, 26, 26);
   ellipse(395, 41, 16, 16);
   ellipse(443, 68, 46, 46);
   ellipse(384, 81, 26, 26);
   ellipse(415, 70, 76, 76);
   noFill();
   stroke(255, 255, 255);
   strokeWeight(5);
   arc(402, 62, 35, 35, 170, 235);


   // White paint blob
   fill(224, 224, 224);
   stroke(0, 0, 0);
   strokeWeight(whiteWidth);
   ellipse(535, 70, 80, 80);
   ellipse(565, 39, 30, 30);
   ellipse(515, 41, 20, 20);
   ellipse(538, 44, 40, 50);
   ellipse(563, 68, 50, 50);
   ellipse(512, 58, 35, 35);
   ellipse(504, 81, 30, 30);
   ellipse(557, 95, 30, 30);
   ellipse(527, 90, 50, 50);
   noStroke();
   ellipse(565, 39, 26, 26);
   ellipse(515, 41, 16, 16);
   ellipse(563, 68, 46, 46);
   ellipse(504, 81, 26, 26);
   ellipse(535, 70, 76, 76);
   noFill();
   stroke(255, 255, 255);
   strokeWeight(5);
   arc(522, 62, 35, 35, 170, 235);


   // Paint dropper
   stroke(0, 0, 0);
   strokeWeight(5);
   fill(paint1, paint2, paint3);
   stroke(0, 0, 0);
   rect(70, 235, 40, 150, 20);
   noStroke();
   triangle(71, 250, 109, 245, 90, 195);
   stroke(0, 0, 0);
   strokeWeight(5);
   line(71, 250, 90, 195);
   line(109, 246, 90, 195);
   fill(36, 36, 36);
   rect(65, 363, 50, 70, 50);
   rect(53, 360, 75, 20, 50);
   fill(255, 255, 255);
   strokeWeight(2);
   line(86, 340, 70, 340);
   line(86, 320, 70, 320);
   line(86, 300, 70, 300);
   noStroke();
   ellipse(90, 195, 30, 30);


   // Changing dropper color
   if(isRed === true) {
       paint1 = 255;
       paint2 = 0;
       paint3 = 0;
   }
   if(isGreen === true) {
       paint1 = 0;
       paint2 = 255;
       paint3 = 0;
   }
   if(isBlue === true) {
       paint1 = 0;
       paint2 = 0;
       paint3 = 255;
   }
   if(isBlack === true) {
       paint1 = 40;
       paint2 = 40;
       paint3 = 40;
   }
   if(isWhite === true) {
       paint1 = 224;
       paint2 = 224;
       paint3 = 224;
   }


   // Button enlargment
   if(mouseX>200 && mouseX<400 && mouseY>200 && mouseY<432) {
       cupWidth = 6;
   }
   else{
       cupWidth = 5;
   }
   if(mouseY>440) {
       barWidth = 7;
   }
   else{
       barWidth = 5;
   }
   if(mouseX>15 && mouseX<95 && mouseY>30 && mouseY<110) {
       redWidth = 5;
   }
   else{
       redWidth = 3;
   }
   if(mouseX>135 && mouseX<215 && mouseY>30 && mouseY<110) {
       greenWidth = 5;
   }
   else{
       greenWidth = 3;
   }
   if(mouseX>255 && mouseX<335 && mouseY>30 && mouseY<110) {
       blueWidth = 5;
   }
   else{
       blueWidth = 3;
   }
   if(mouseX>375 && mouseX<455 && mouseY>30 && mouseY<110) {
       blackWidth = 5;
   }
   else{
       blackWidth = 3;
   }
   if(mouseX>495 && mouseX<575 && mouseY>30 && mouseY<110) {
       whiteWidth = 5;
   }
   else{
       whiteWidth = 3;
   }


   // Checking accuracy
   if(newRed>Red-20 && newRed<Red+20) {
       goodRed = true;
   }
   else{
       goodRed = false;
   }
   if(newGreen>Green-20 && newGreen<Green+20) {
       goodGreen = true;
   }
   else{
       goodGreen = false;
   }
   if(newBlue>Blue-20 && newBlue<Blue+20) {
       goodBlue = true;
   }
   else{
       goodBlue = false;
   }
   if(goodRed===true && goodGreen===true && goodBlue===true) {
       display1 = 0;
       display2 = 100;
   }
   else{
       display1 = 100;
       display2 = 0;
   }


   // Selecting paint color
   mousePressed = function() {
       if(mouseX>15 && mouseX<95 && mouseY>30 && mouseY<110) {
           isRed = true;
           isGreen = false;
           isBlue = false;
           isBlack = false;
           isWhite = false;
   }
       if(mouseX>135 && mouseX<215 && mouseY>30 && mouseY<110) {
           isRed = false;
           isGreen = true;
           isBlue = false;
           isBlack = false;
           isWhite = false;
   }
       if(mouseX>255 && mouseX<335 && mouseY>30 && mouseY<110) {
           isRed = false;
           isGreen = false;
           isBlue = true;
           isBlack = false;
           isWhite = false;
   }
       if(mouseX>375 && mouseX<455 && mouseY>30 && mouseY<110) {
           isRed = false;
           isGreen = false;
           isBlue = false;
           isBlack = true;
           isWhite = false;
   }
       if(mouseX>495 && mouseX<575 && mouseY>30 && mouseY<110) {
           isRed = false;
           isGreen = false;
           isBlue = false;
           isBlack = false;
           isWhite = true;
   }
       // Changing water color
       if(mouseX>200 && mouseX<400 && mouseY>200 && mouseY<432) {
           if(isRed === true) {
               if(newRed<255) {
                   newRed+=10;
               }
               if(newRed>=255) {
                   newGreen-=10;
                   newBlue-=10;
               }
           }
           if(isGreen === true) {
               if(newGreen<255) {
                   newGreen+=10;
               }
               if(newGreen>=255) {
                   newRed-=10;
                   newBlue-=10;
               }
           }
           if(isBlue === true) {
               if(newBlue<255) {
                   newBlue+=10;
               }
               if(newBlue>=255) {
                   newRed-=10;
                   newGreen-=10;
               }
           }
           if(isBlack === true && newRed>=0 && newGreen>=0 && newBlue>=0) {
               newRed-=5;
               newGreen-=5;
               newBlue-=5;
           }
           if(isWhite === true && newRed<=255 && newGreen<=255 && newBlue<=255) {
               newRed+=5;
               newGreen+=5;
               newBlue+=5;
              
           }
       }
       // Checking accuracy
       if(mouseY>440) {
           if(goodRed===true && goodGreen===true && goodBlue===true) {
               // Return water color
               newRed = 210;
               newGreen = 215;
               newBlue = 250;
               // Return dropper color
               paint1 = 210;
               paint2 = 215;
               paint3 = 250;
               isRed = false;
               isGreen = false;
               isBlue = false;
               isBlack = false;
               isWhite = false;
               // New random target color
               Red = Math.random(50, 255);
               Green = Math.random(50, 255);
               Blue = Math.random(50, 255);
               // Return display position
               display1 = 100;
               display2 = 100;
               // Change score
               score+=1;
           }
       }
   };


   // Game end
   if(end===true) {
       background(255, 255, 255);
       fill(210, 215, 250);
       stroke(0, 0, 0);
       strokeWeight(10);
       rect(95, 100, 400, 400, 20);
       fill(255, 255, 255);
       noStroke();
       rect(100, 105, 390, 60, 20);
       ellipse(236, 145, 115, 91);
       ellipse(125, 145, 115, 91);
       ellipse(352, 145, 115, 91);
       ellipse(459, 145, 115, 91);
       noFill();
       stroke(0, 0, 0);
       strokeWeight(10);
       rect(95, 100, 400, 400, 20);
       stroke(0, 0, 0);
       strokeWeight(8);
       arc(236, 145, 115, 91, 10, 170);
       arc(122, 145, 115, 91, 10, 115);
       arc(350, 145, 115, 91, 10, 170);
       arc(464, 145, 115, 91, 60, 170);
       fill(0, 0, 0);
       textSize(65);
       text("Game Over", 125, 275);
       textSize(50);
       text("Score: " + score, 200, 343);
       textSize(playWidth);
       text("Play Again", 120, 432);
       stroke(0, 0, 0);
       strokeWeight(arrowWidth);
       line(360, 420, 440, 420);
       line(440, 420, 425, 405);
       line(440, 420, 425, 435);
       // Button enlargement
       if(mouseX>95 && mouseX<495 && mouseY>400 && mouseY<480) {
           playWidth = 48;
           arrowWidth = 10;
       }
       else{
           playWidth = 45;
           arrowWidth = 8;
       }
       mousePressed = function() {
           if(mouseX>95 && mouseX<495 && mouseY>400 && mouseY<480) {
               Program.restart();
           }
       };
   }

};