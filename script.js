// Product details data (Marathi)
const products = {
    land1: {
        title: "५ एकर सेंद्रिय शेती",
        image: "dan-meyers-IQVFVH0ajag-unsplash.jpg",
        location: "चेन्नई, तामिळनाडू",
        price: "₹१५,०००/महिना",
        buyPrice: "",
        description: "ही सुपीक ५ एकर सेंद्रिय जमीन चेन्नई शहरापासून फक्त ३० किमी अंतरावर आहे. गेल्या ५ वर्षांपासून सेंद्रिय प्रमाणित जमीन असून, यात बोअरवेल व ठिंबक सिंचन व्यवस्था आहे. सेंद्रिय भाजीपाला किंवा फळबागेसाठी योग्य.",
        features: [
            "५ एकर सेंद्रिय प्रमाणित जमीन",
            "२ एचपी मोटर असलेले बोअरवेल",
            "ठिंबक सिंचन प्रणाली लावलेली आहे",
            "मातीची चाचणी झालेली व अनेक पिकांसाठी योग्य",
            "परिघ fencing केलेला आहे"
        ],
        type: "land"
    },
    land2: {
        title: "८ एकर सुपीक जमीन",
        image: "karsten-wurth-UbGYPMbMYP8-unsplash.jpg" ,
        location: "पंजाब",
        price: "₹२२,०००/महिना",
        buyPrice: "",
        description: "पंजाबच्या सुपीक मैदानात असलेली ८ एकर शेती जमीन. पिढ्यानपिढ्या गहू व भाताच्या लागवडीसाठी वापरली गेलेली आणि उत्कृष्ट माती गुणवत्ता असलेली. कालवा सिंचन उपलब्ध.",
        features: [
            "८ एकर उच्च दर्जाची शेती जमीन",
            "कालवा सिंचनाची सोय",
            "पिकासाठी सज्ज जमीन",
            "चांगला रस्ता कनेक्शन",
            "साठवण शेडसह"
        ],
        type: "land"
    },
    land3: {
        title: "३ एकर सिंचन यंत्रणेसह",
        image: "dietmar-reichle-caiX9QloFc8-unsplash.jpg",
        location: "महाराष्ट्र",
        price: "₹१२,०००/महिना",
        buyPrice: "",
        description: "पूर्ण सिंचन सोयीसह नीट राखलेली ३ एकर जमीन. साखरकांद्याच्या लागवडीसाठी वापरली गेलेली व एक लहान फार्महाउससह. त्वरित भाड्याने उपलब्ध.",
        features: [
            "३ एकर सिंचनसह जमीन",
            "२ खोल्यांचे फार्महाउस",
            "वीज कनेक्शन उपलब्ध",
            "पाण्याची चांगली उपलब्धता",
            "बाजाराजवळ"
        ],
        type: "land"
    },
    machine1: {
        title: "जॉन डिअर ट्रॅक्टर",
        image: "julia-koblitz-SPzzE4TYxZ0-unsplash.jpg",
        location: "बंगळुरूमध्ये उपलब्ध",
        price: "₹१,५००/दिवस (भाडे)",
        buyPrice: "₹५,५०,००० (खरेदी)",
        description: "२०२० मॉडेल John Deere 5050D ट्रॅक्टर, फक्त ५०० तास वापरलेले. सर्व आवश्यक इम्प्लीमेंट्ससह व चांगल्या स्थितीत. ५० किमी परिसरात डिलिव्हरी उपलब्ध.",
        features: [
            "५० एचपी इंजिन",
            "४WD क्षमता",
            "कल्टीव्हेटर व ट्रेलरसह",
            "मेंटेनन्स इतिहासासह चांगले जपलेले",
            "ऑपरेटर आवश्यक असल्यास उपलब्ध"
        ],
        type: "machine"
    },
    machine2: {
        title: "कंबाईन हार्वेस्टर",
        image: "randy-fath-dDc0vuVH_LU-unsplash.jpg",
        location: "पंजाबमध्ये उपलब्ध",
        price: "₹३,०००/दिवस (भाडे)",
        buyPrice: "₹१२,००,००० (खरेदी)",
        description: "२०२१ मॉडेल क्लास कंबाईन हार्वेस्टर, ८ ओळी क्षमता. गहू व भात कापणीसाठी उत्तम. ऑपरेटरसह अतिरिक्त शुल्कात उपलब्ध.",
        features: [
            "८ ओळींची कापणी क्षमता",
            "कमी धान्य नुकसान तंत्रज्ञान",
            "GPS मार्गदर्शन प्रणाली",
            "पूर्ण सेवा इतिहासासह",
            "ऑपरेटर उपलब्ध"
        ],
        type: "machine"
    },
    machine3: {
        title: "सौर सिंचन पंप",
        image: "zac-edmonds-N1LBcqLP9ec-unsplash.jpg",
        location: "संपूर्ण भारतात उपलब्ध",
        price: "₹५००/दिवस (भाडे)",
        buyPrice: "₹४५,००० (खरेदी)",
        description: "५ एचपी सौर उर्जेवर चालणारा सिंचन पंप, १० सौर पॅनलसह. इन्व्हर्टर व माउंटिंग स्ट्रक्चर यांसह पूर्ण सेटअप. वीजेवरील खर्चात ९०% पर्यंत बचत.",
        features: [
            "५ एचपी क्षमता",
            "१० x ३००W सौर पॅनल्स",
            "माउंटिंग स्ट्रक्चरसह संपूर्ण सेटअप",
            "५ वर्षांची वॉरंटी",
            "इंस्टॉलेशनसाठी सहाय्य उपलब्ध"
        ],
        type: "machine"
    },
    product1: {
        title: "हायब्रीड गहू बियाणे",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        location: "संपूर्ण भारतात उपलब्ध",
        price: "₹१,२००/किलो",
        buyPrice: "",
        description: "रोग प्रतिकारक हायब्रीड गहू बियाणे. पारंपरिक बियाण्यांपेक्षा २०-३०% अधिक उत्पादन. बहुतेक भारतीय जमिनींसाठी योग्य.",
        features: [
            "९०% पेक्षा अधिक उगम दर",
            "रोग प्रतिकारक जाती",
            "अनेक हवामानासाठी योग्य",
            "जास्त उत्पादन क्षमता",
            "आर्द्रता-प्रतिरोधक पॅकिंगमध्ये"
        ],
        type: "product"
    },
    product2: {
        title: "सेंद्रिय खते",
        image:"istockphoto-479440915-2048x2048.jpg" ,
        location: "संपूर्ण भारतात उपलब्ध",
        price: "₹८००/गोणी",
        buyPrice: "",
        description: "वनस्पती व प्राणीजन्य सेंद्रिय घटकांपासून तयार केलेले उच्च दर्जाचे सेंद्रिय खत. जमिनीची रचना सुधारते व झाडांना पोषण प्रदान करते.",
        features: [
            "५० किलोची गोणी",
            "NPK गुणोत्तर ४-३-३",
            "सूक्ष्म अन्नद्रव्यांनी समृद्ध",
            "जमिनीची रचना सुधारते",
            "सेंद्रिय शेतीसाठी सुरक्षित"
        ],
        type: "product"
    },
    product3: {
        title: "जैविक कीटकनाशक",
        image: "AdobeStock_1097156722_Preview.jpeg",
        location: "संपूर्ण भारतात उपलब्ध",
        price: "₹१,५००/लिटर",
        buyPrice: "",
        description: "नीम व इतर वनस्पतींमधून तयार केलेले प्रभावी जैविक कीटकनाशक. अनेक प्रकारच्या कीटकांवर नियंत्रण ठेवते, पर्यावरणास व उपयोगी कीटकांना सुरक्षित.",
        features: [
            "१ लिटर बाटली",
            "अनेक कीटकांवर नियंत्रण",
            "उपयुक्त कीटकांना सुरक्षित",
            "कोणतेही रसायन अवशेष नाहीत",
            "OMRI प्रमाणित सेंद्रिय"
        ],
        type: "product"
    }
};


// Show product details in modal
function showProductDetails(productId) {
    const product = products[productId];
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    let featuresHtml = '';
    product.features.forEach(feature => {
        featuresHtml += `<li>${feature}</li>`;
    });
    
    let buyButton = '';
    if (product.buyPrice) {
        buyButton = `<button class="add-to-cart">Add to Cart</button>`;
        if (product.type === 'machine') {
            buyButton += `<button class="rent-now">Rent Now</button>`;
        }
    } else if (product.type === 'land') {
        buyButton = `<button class="rent-now">Lease Now</button>`;
    } else {
        buyButton = `<button class="add-to-cart">Add to Cart</button>`;
    }
    
    modalBody.innerHTML = `
        <div class="modal-body">
            <img src="${product.image}" alt="${product.title}">
            <div class="modal-info">
                <h2>${product.title}</h2>
                <p><strong>Location:</strong> ${product.location}</p>
                <p><strong>${product.buyPrice ? 'Rent Price:' : 'Price:'}</strong> ${product.price}</p>
                ${product.buyPrice ? `<p><strong>Purchase Price:</strong> ${product.buyPrice}</p>` : ''}
                <p>${product.description}</p>
                <h3>Features:</h3>
                <ul>${featuresHtml}</ul>
                <div class="modal-actions">
                    ${buyButton}
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Add event listeners to the new buttons
    document.querySelector('.add-to-cart')?.addEventListener('click', addToCart);
    document.querySelector('.rent-now')?.addEventListener('click', rentOrLease);
}

// Close modal
function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Add to cart function
function addToCart() {
    const cartCount = document.querySelector('.cart-count');
    let count = parseInt(cartCount.textContent);
    cartCount.textContent = count + 1;
    
    // Simple animation
    cartCount.style.transform = 'scale(1.5)';
    setTimeout(() => {
        cartCount.style.transform = 'scale(1)';
    }, 300);
    
    alert('Item added to cart!');
    closeModal();
}

// Rent/Lease function
function rentOrLease() {
    alert('Thank you for your interest! Our team will contact you shortly to complete the process.');
    closeModal();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


