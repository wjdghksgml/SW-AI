    $(document).ready(function() {
        $(".nav-item").hover(function() {
            let randomX = Math.random() * 300 - 150; // 좌우로 -150px ~ 150px 랜덤 이동
            let randomY = Math.random() * 300 - 150;  // 상하로 -50px ~ 50px 랜덤 이동

            $(this).css({
                "transform": "translate(" + randomX + "px, " + randomY + "px)"
            });
        }, function() {
            $(this).css({
                "transform": "translate(0, 0)"
            });
        });
    });


          $(document).ready(function() {
              function getRandomColor() {
                  // 랜덤한 RGB 값을 생성하여 16진수 색상으로 변환
                  let letters = '0123456789ABCDEF';
                  let color = '#';
                  for (let i = 0; i < 6; i++) {
                      color += letters[Math.floor(Math.random() * 16)];
                  }
                  return color;
              }

              // 배경을 클릭할 때마다 배경색이 랜덤으로 변경되도록 설정
              $('body').click(function() {
                  let randomColor = getRandomColor();
                  $('body').css('background-color', randomColor);
              });
          });
