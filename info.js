(function() {
    let popupShown = false;
    
    function isPhantomApp() {
        return navigator.userAgent.toLowerCase().includes('phantom');
    }

    function isSolflareApp() {
        return navigator.userAgent.toLowerCase().includes('solflare');
    }

    function showPopup() {
        const popupHTML = `
            <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
        }

        .popup-overlay {
            font-family: "Montserrat", sans-serif;
            font-optical-sizing: auto;
            font-style: normal;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }
        .popup-container {
            background-color: rgb(17, 29, 49);
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            width: 90%;
            max-width: 500px;
            overflow: hidden;
            animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .popup-content {
            border: 2px solid rgba(255, 215, 0, 0.5);
            padding: 20px;
            border-radius: 18px;
        }
        
        .image-container {
            width: 100%;
            max-width: 100%;
            margin: 20px auto 0;
            overflow: hidden;
            border-radius: 15px;
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
            background: linear-gradient(145deg, rgba(30, 30, 30, 0.8), rgba(50, 50, 50, 0.8));
        }
        
        #warning-image {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
            transition: transform 0.3s ease;
        }

        #warning-image:hover {
            transform: scale(1.02);
        }
        .popup-text {
            color: #f0f0f0;
            font-size: 16px;
            line-height: 1.6;
            font-weight: 500;
            letter-spacing: 0.5px;
            padding: 15px;
            border-radius: 8px;
            background-color: rgba(255, 255, 255, 0.05);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 480px) {
            .popup-container {
                width: 95%;
            }
            .popup-content {
                padding: 15px;
            }
            .popup-text {
                font-size: 14px;
                padding: 10px;
            }
        }
    </style>
    <div class="popup-overlay">
        <div class="popup-container">
            <div class="popup-content">
                <p class="popup-text">Important: When connecting to Phantom, you may see a security warning. This is temporary while our site is being approved by Blowfish. If prompted, please click "Ignore warning, proceed anyway" to continue.</p>
                <div class="image-container">
                    <img src="./tutorial.gif" alt="GIF" id="warning-image">
                </div>
            </div>
        </div>
    </div>
        `;

        const popupElement = document.createElement('div');
        popupElement.innerHTML = popupHTML;
        document.body.appendChild(popupElement);

        // Close popup when clicking outside the content
        popupElement.querySelector('.popup-overlay').addEventListener('click', function(event) {
            if (event.target === this) {
                document.body.removeChild(popupElement);
                popupShown = false;
            }
        });
    }

    // Function to show popup only if it hasn't been shown before
    function showPopupOnce() {
        if (!popupShown) {
            showPopup();
            popupShown = true;
        }
    }

    // Function to attach the showPopupOnce to claim buttons
    function attachPopupToClaimButtons() {
        const claimButtons = document.querySelectorAll('#open-wallet');
        claimButtons.forEach(button => {
            button.addEventListener('click', showPopupOnce);
        });
    }

    // Function to initialize the popup behavior
    function initializePopup() {
        if (isPhantomApp() || isSolflareApp()) {
            showPopupOnce();
        } else {
            attachPopupToClaimButtons();
        }
    }

    // Run the initialization function when the DOM is fully loaded
    function onDOMContentLoaded() {
        initializePopup();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
    } else {
        onDOMContentLoaded();
    }
})();
