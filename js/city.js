/* $.ajax({
  url: "http://v.juhe.cn/weather/citys",
  type: "get",
  dataType: "jsonp",
  jsonp: "callback",
  jsonpCallback: "response",
  data: {
    key: "10c213578f42636af4a2757fb63b28a1"
  },
  success: function(data) {
    console.log(JSON.stringify(data));
  }
}) */

function citydata(res) {
  let citylist = res.result;
  let list=[];
  $('#input').bind('input propertychange',function(){
    $('li').remove();
    $('ul').show();
    list=[];
    citylist.forEach((element) => {
      if(element.district.indexOf($('#input').val()) == 0) {
        list.push(element.district);
      }
      if($('#input').val()===''){
        $('ul').hide();
      }
    });
    
    for(let i=0;i<list.length;i++){
      $('ul').append("<li id="+i+">"+list[i]+"</li>"); 
      $('#'+i).click(function(){
        if($('#'+i) !== undefined){
          let cityname = $('#'+i)[0].innerText;
          $('input').val(cityname);
          $('ul').hide();
        }
      })
    }
    
    /* for(let j=0;j<list.length;j++){
      (function(j){
        $('li')[j].click(function(){
         
            console.log(1)
          
        })
      })(j)
    } */
    /* for(let j=0;j<list.length;j++){
      $('li')[j].click(function(j){
        console.log(j)
      }) */
      /* if($('li')[j] !== undefined){
        console.log($('li')[j].innerText)
      } */
    /* } */
    
  })
}



