function ajax(method, url) {
    
    let httpReq = new XMLHttpRequest();
 
    httpReq.open(method, url);
    httpReq.onreadystatechange = function() {
        if(httpReq.readyState == 4) {
     
            if(httpReq.status == 200) {
          
                let returnData = httpReq.responseText;
                
                httpReq.onsuccess(returnData);
                
                httpReq = null;
                
            }
        }
    }
    
 
    httpReq.onsuccess = function(response) {
        let jsonObj = JSON.parse(response);

        let div = document.createElement('div');
        div.setAttribute('id', 'dane-programisty');
        
       
//        div.innerHTML = JSON.stringify(jsonObj);
        div.innerHTML = ('Imię: ' + jsonObj.imie + '<br>' + ' Nazwisko: ' + jsonObj.nazwisko + '<br>' + ' Zawod: ' + jsonObj.zawod + '<br>' + ' Firma: ' + jsonObj.firma)
    
        
        document.body.appendChild(div);
    }
    
    httpReq.send();
}

document.getElementById('btn').addEventListener('click', pobierzDane);

function pobierzDane() {
    ajax('GET', 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php');
}
