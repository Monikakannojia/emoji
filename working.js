document.querySelector("body").addEventListener("mousemove",eyeball);
        function eyeball()
        {
            var eye=document.querySelectorAll(".eye");
            eye.forEach ( function(eye))
            let x = eye.getBoundingClientRect().left+eye.clientwidth/2;
            let y = eye.getBoundingClientRect().topt+eye.clientHeight/2;
            let radian=Math.atan2(event.pageX -x,event.page -Y);
            let rot=radian*(180/Math.PI)* -1+270;
            eye.style.transform="ratate("+rot+"deg)";
           };
    