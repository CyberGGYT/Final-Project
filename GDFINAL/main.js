document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const current = window.location.pathname.split('/').pop();

    links.forEach(link => {
        if (link.getAttribute('href') === current) {
            link.style.color = '#3cff9a';
        }
    });

    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });

    const images = document.querySelectorAll('.image-holder');
    images.forEach(img => {
        img.addEventListener('mousemove', e => {
            const rect = img.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            img.style.backgroundPosition = `${x / 10}px ${y / 10}px`;
            img.style.boxShadow = `0 0 30px rgba(60,255,154,0.35)`;
        });

        img.addEventListener('mouseleave', () => {
            img.style.backgroundPosition = 'center';
            img.style.boxShadow = '0 0 20px rgba(60,255,154,0.15)';
        });
    });

    const dividers = document.querySelectorAll('hr');
    dividers.forEach(divider => {
        divider.style.border = 'none';
        divider.style.height = '2px';
        divider.style.background = 'linear-gradient(90deg, transparent, #3cff9a, transparent)';
        divider.style.margin = '40px 0';
        divider.style.transition = 'filter 0.4s ease';

        divider.addEventListener('mouseenter', () => {
            divider.style.filter = 'brightness(1.8)';
        });

        divider.addEventListener('mouseleave', () => {
            divider.style.filter = 'brightness(1)';
        });
    });

    const details = document.querySelectorAll('details');
    details.forEach(d => {
        const content = d.querySelector('p');
        if (content) {
            content.style.transition = 'all 0.4s ease';
        }

        d.addEventListener('toggle', () => {
            if (d.open) {
                d.style.boxShadow = '0 0 20px rgba(109,220,255,0.4)';
            } else {
                d.style.boxShadow = 'none';
            }
        });
    });

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const message = document.createElement('div');
            message.textContent = 'Your message has been sent successfully.';
            message.style.marginTop = '14px';
            message.style.color = '#3cff9a';
            message.style.fontWeight = '600';
            message.style.opacity = '0';
            message.style.transition = 'opacity 0.6s ease';
            form.appendChild(message);
            setTimeout(() => message.style.opacity = '1', 50);
            form.reset();
        });
    }
});
