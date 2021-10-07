
//메일 보내기 
window.onload = function() {
    // form id, #contact-form 안에 있는 것들 전송
    document.getElementById('mail_area').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        
        // these IDs from the previous steps
        // 서비스 id, 이메일 템플릿
        //emailjs.sendForm('contact_service', 'contact_form', this)
        emailjs.sendForm('contact_service(service_rf1dmua)', 'contact_form(template_knxxlw2)', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

$(document).ready(function() {
    emailjs.init("user_TEB2wUUkTOYP4hgzFxzKl");		
    //"user_xxxxx"이 부분은 사용자마다 다르니 반드시 emailJS의 installation 화면을 확인
    $('input[name=submit]').click(function(){       	 
      
      var templateParams = {	
      //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
            from_name: $('input[name=from_name]').val(),
            //phone: $('input[name=phone]').val(), 
            mail_adress : $('input[name=mail_aderess]').val(),
            message_html : $('textarea[name=message_html]').val()
                       };
                
                
     emailjs.send('gmail', 'template_knxxlw2', templateParams)
     //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
             .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
             }, function(error) {
                console.log('FAILED...', error);
             });
                


    });
    
  });