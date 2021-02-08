// <---- Calculation Part ----->
//  12hours-->360 degree
//  1hrs=30d
//  nhrs=30*n
//  for hour hand :
//   (60min--->30d, 1min--->1/2d, nmin--->n/2d). 30n + n/2.
 
//   for min hand :
//  60min ---> 360d
//  1min ---> 6d
//  m minutes ---> 6m

//  for second hand :
//  60 seconds ---> 360d
//  1 sec ---> 6d
//  s sec ---> 6*s d.



setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime/2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);