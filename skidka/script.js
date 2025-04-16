function calculateDiscount() {
    const fullPrice = 3500;
    const discountPercent = 15;
  
    const discountAmount = fullPrice * (discountPercent / 100);
    const finalPrice = fullPrice - discountAmount;
  
    document.getElementById("discountResult").textContent =
      `скидочка будет: ${discountAmount.toFixed(2)} рубликов`;
  
    document.getElementById("finalPrice").textContent =
      `итоговый ценничек: ${finalPrice.toFixed(2)} рубликов`;
  }
  