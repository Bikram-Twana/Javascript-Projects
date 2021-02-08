Simple Clock with Javascript that shows time with your current system.
Just open the index.html to run in your browser.



// In case If you want to know the calculation part for hour hand, minute hand and second hand:

<---- Calculation Part ----->
 12hours-->360 degree
  1hrs=30d
  nhrs=30*n
  for hour hand :
   (60min--->30d, 1min--->1/2d, nmin--->n/2d). 30n + n/2.
 
 for min hand :
  60min ---> 360d
  1min ---> 6d
  m minutes ---> 6m

 for second hand :
  60 seconds ---> 360d
  1 sec ---> 6d
  s sec ---> 6*s d.