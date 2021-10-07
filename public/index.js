
//document.onmousedown = click; //우클릭을 방지해주는 자바스크립트 이벤트
        //function click(){
        //    if(event.button == 2){
        //        alert("죄송합니다. \n 오른쪽 마우스는 사용할 수 없습니다.");
        //    }
        //}

        //function showPopup(){
        //   window.open("project1.html","팝업 테스트","width=400, height=300, top=10, left=10");
        //}

        function openWindowPop(url, name){
            let popupX = (document.body.offsetWidth / 2) - (1080 / 2); 
            //팝업 가운데 정렬 : 가로사이즈 1080px인 팝업을 띄울 때 
            //창 크기 1/2에서 1080의 1/2을 뺀 값을 통해 가운데 위치시키기
            
            //let options = 
            //'top=100, left='+ popupX + ', width=1080, height=900, status=no, menubar=no, toolbar=no, resizable=no, scrollbars=auto';
            
            const options = `top=100, left=${popupX}), width=1080, height=900, status=no, menubar=no, toolbar=no, resizable=no, scrollbars=auto` 
            
            window.open(url, name, options);
        }
    
        function scorllToProject() {
                let projectTop = document.querySelector("#project_title").offsetTop; //프로젝트 부분의 스크롤 위치
                //let headerHeight = document.querySelector("#header").offsetTop; //헤더 부분의 스크롤 위치
                window.scrollTo({top:projectTop - 180, behavior:'smooth'});
        }
    
        function scorllToAbout() {
                let aboutTop = document.querySelector("#about").offsetTop; //어바웃 부분의 스크롤 위치
                window.scrollTo({top:aboutTop - 180, behavior:'smooth'});
        }
    
        function scorllToContact() {
                let contactTop = document.querySelector("#contact").offsetTop; //컨택트 부분의 스크롤 위치
                window.scrollTo({top:contactTop - 180, behavior:'smooth'});
        }
    
        function scrollToTop(){ 
                window.scrollTo({top:0, behavior:'smooth'}); 
        }  


        //스크롤시 부드럽게 나타나는 애니메이션 효과
        function isElementUnderBottom(elem, triggerDiff) {
            const { top } = elem.getBoundingClientRect();
            const { innerHeight } = window;
            return top > innerHeight + (triggerDiff || 0);
          }
          
          function handleScroll() {
            const elems = document.querySelectorAll('.up-on-scroll');
            elems.forEach(elem => {
              if (isElementUnderBottom(elem, -20)) {
                elem.style.opacity = "0";
                elem.style.transform = 'translateY(70px)';
              } else {
                elem.style.opacity = "1";
                elem.style.transform = 'translateY(0px)';
              }
            })
          }
          
          window.addEventListener('scroll', handleScroll);

        
          function resultFun(x) { 
              var positionLeft = x.clientX; 
              var positionTop = x.clientY; 
              console.log(positionLeft)
              document.getElementById('cursor_box').style.left = positionLeft - 10 + "px"; 
              document.getElementById('cursor_box').style.top = positionTop - 10 +"px"; 
            } 
            if (document.addEventListener) { 
                document.addEventListener("mousemove", resultFun); 
            } else if (document.attachEvent) { 
                document.attachEvent("onmousemove", resultFun); 
                //attachEvent는 IE8이하와 오페라에서 사용하는 명령어이다 
            };


        //이메일 유효성 체크하기
        function check() {
          document.getElementsById("mail").action = "https://script.google.com/macros/s/AKfycbxlQvaPhnmYEC_bt2HR294Zo48jdFME1TUOf7NOy8fTpmOfwnM/exec";
          const email = document.getElementById("email").value;
          if (email != "") {
              const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
              if (exptext.test(email) == false) {
                  //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우			
                  alert("입력한 메일형식이 올바르지 않습니다.");
                  document.formtag.email.focus();
                  document.getElementById("mail").action = "https://script.google.com/macros/s/AKfycbxlQvaPhnmYEC_bt2HR294Zo48jdFME1TUOf7NOy8fTpmOfwnM/exec";
              }
          }
      }



