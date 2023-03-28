document.addEventListener('DOMContentLoaded', function () {

    // menu
    const mobileMenuToggle = document.querySelector('[data-menu-toggle]');
    const menu = document.getElementById('main-menu');
    const header = document.getElementById('header');

    if (menu && mobileMenuToggle) {
        mobileMenuToggle.onclick = function () {

            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                header.classList.add('overflow-y-scroll')
                header.classList.add('h-screen');
            } else {
                menu.classList.add('hidden');
                header.classList.remove('overflow-y-scroll');
                header.classList.remove('h-screen');
            }

        }
    }

    // sticky header
    window.onscroll = stickyHeader;

    let sticky = header.offsetTop;

    function stickyHeader() {
        if (window.scrollY > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    // spoilers
    const spoilers = document.querySelectorAll('[data-spoiler]');

    spoilers.forEach((spoiler) => {
        const toggle = spoiler.querySelector('[data-toggle]');
        const body = spoiler.querySelector('[data-body]');
        const icon = spoiler.querySelector('[data-icon]');

        if (toggle && body) {
            toggle.onclick = function () {
                if (body.classList.contains('hidden')) {
                    body.classList.remove('hidden');
                    icon.classList.remove('-rotate-90');
                } else {
                    body.classList.add('hidden');
                    icon.classList.add('-rotate-90');
                }
            }
        }
    })

    // tabs
    const tabButtons = document.querySelectorAll('[data-toggle-tab]');
    const tabContents = document.querySelectorAll('[data-tab]');

    tabButtons.forEach(button => {
        button.onclick = () => {
            const target = document.getElementById(button.dataset.toggleTab);

            if (target) {
                tabContents.forEach(tab => tab.id !== target ? tab.classList.add('hidden') : '');

                if (target.classList.contains('hidden')) {
                    target.classList.remove('hidden')
                }

                tabButtons.forEach(b => {
                    b.classList.remove('text-curare');
                    b.classList.remove('border-curare');
                    b.classList.add('border-transparent');
                });

                button.classList.add('text-curare');
                button.classList.remove('border-transparent');
                button.classList.add('border-curare');
            }
        }
    });

    // phone autofill
    const phoneElements = document.querySelectorAll('input[type="tel"]');
    const maskOptions = {
        mask: '+{7} (000) 000-00-00'
    };

    phoneElements.forEach((element) => IMask(element, maskOptions));

    // modals
    const modalTogglers = document.querySelectorAll('[data-modal]');
    modalTogglers.forEach(toggler => {
        toggler.onclick = () => setModal(toggler.dataset.modal, toggler.dataset.action);
    });

    function setModal(modal, action = 'show') {
        const DOMmodal = document.getElementById(modal);
        const formContainer = DOMmodal.querySelector('.form-container');

        switch (action) {
            case "show":
                DOMmodal.classList.remove('hidden');

                if (formContainer) {
                    setTimeout(() => {
                        formContainer.classList.add('scale-100')
                        formContainer.classList.remove('scale-90')
                    }, 0);
                }
                break;
            case "close":
                DOMmodal.classList.add('hidden');

                if (formContainer) {
                    formContainer.classList.remove('scale-100');
                    formContainer.classList.add('scale-90');
                }
                break;
            default:
                break;
        }
    }

    console.info('octailwind loaded successfully');
});

