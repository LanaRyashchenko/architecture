$('.gallery').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  const burger = document.querySelector("#burger");
  const popup = document.querySelector("#popup");
  const close = document.querySelector("#close");

  burger.addEventListener('click', addClass);
  function addClass() {
    var popActive = document.getElementById("popup"); 
    popActive.classList.add("active");
  };

  close.addEventListener('click', deleteClass);
  function deleteClass() {
    var notActive = document.getElementById("popup"); 
    notActive.classList.remove("active");
  };
