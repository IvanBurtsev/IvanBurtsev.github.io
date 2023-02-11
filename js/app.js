const button = document.getElementById("uclb");
const block = document.getElementById("ball");

uclb.addEventListener("click", function() {
  window.scrollTo({
    top: uclb.offsetTop,
    
    behavior: "smooth"
  });
});




  window.onload = function() {
    let button = document.querySelectorAll(".button");    
    if (button) {
      button.addEventListener("click", function() {
        const title = "стоимость путевки за человека";
        const cost = "1000";       
        const modal = document.createElement("div");
        modal.style.backgroundColor = "grey";
        modal.style.position = "fixed";
        modal.style.top = "50%";
        modal.style.left = "50%";
        modal.style.transform = "translate(-50%, -50%)";
        modal.style.padding = "20px";
        modal.style.boxSizing = "border-box";
        modal.style.width = "300px";
        modal.style.height = "200px";
        modal.style.fontWeight = "bold";
        modal.style.fontSize = "14px";
        modal.style.textAlign = "center";
        modal.style.paddingTop ="70px"
        modal.style.color = "white"
        // add input for number of people
        const numberElement = document.createElement("input");
     
        numberElement.setAttribute("type", "number");
        numberElement.setAttribute("max", "12");
        numberElement.setAttribute("min", "1");
       
        
        // add total cost input
        const totalElement = document.createElement("p");
        let totalCost = cost;
        
          numberElement.addEventListener("change", function(event) {
          totalCost = cost * event.target.value;
          totalElement.innerHTML = "Итоговая стоимость: " + totalCost +"рублей";
        });
        
        // add date of trip input
        const dateElement = document.createElement("input");       
        dateElement.setAttribute("type", "date");
        
        // add order route button
        const orderButton = document.createElement("button");
        orderButton.innerHTML = "Сделать заказ";
        orderButton.addEventListener("click", function() {
          // check for valid date
          const date = new Date(dateElement.value);
          if (date < new Date()) {
            alert("Date of the trip must be after the current date.");
            return;
          }
          // check for valid number of people
          if (numberElement.value === "") {
            alert("Number of people field must be filled.");
            return;
          }
          // output to console
          console.log("Route: " + title);
          console.log("Date of trip: " + dateElement.value);
          console.log("Number of people: " + numberElement.value);
          console.log("Total cost: " + totalCost);
        });
        
        const titleElement = document.createElement("h1");
        titleElement.innerHTML = title;
        const costElement = document.createElement("p");
        costElement.innerHTML = "Цена: " + cost + " рублей";
        
        
        const closeButton = document.createElement("button");
        closeButton.innerHTML = "&times;";
        closeButton.style.position = "absolute";
        closeButton.style.top = "0";
        closeButton.style.right = "0";
        closeButton.style.fontSize = "24px";
        closeButton.style.backgroundColor = "transparent";
        closeButton.style.border = "none";
        closeButton.style.cursor = "pointer";
        closeButton.addEventListener("click", function() {
          document.body.removeChild(modal);
        });
        
        modal.appendChild(closeButton);
        modal.appendChild(titleElement);
        modal.appendChild(costElement);
        modal.appendChild(numberElement);
        modal.appendChild(dateElement);
        modal.appendChild(totalElement);
        modal.appendChild(orderButton);
        document.body.appendChild(modal);
      });
    }
  };


