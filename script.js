$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });

    // Navbar background change on scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').css('background', 'rgba(255, 255, 255, 0.98)');
            $('.navbar').css('box-shadow', '0 2px 5px rgba(0, 0, 0, 0.1)');
        } else {
            $('.navbar').css('background', 'rgba(255, 255, 255, 0.95)');
            $('.navbar').css('box-shadow', 'none');
        }
    });

    // Sample portfolio data (in a real application, this would come from a backend)
    const portfolioData = [
        {
            title: "Web Development Portfolio",
            student: "John Doe",
            university: "Tech University",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            description: "A collection of web development projects showcasing modern design principles."
        },
        {
            title: "Graphic Design Collection",
            student: "Jane Smith",
            university: "Design Institute",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            description: "Creative designs and illustrations demonstrating artistic talent."
        },
        {
            title: "Mobile App Development",
            student: "Mike Johnson",
            university: "Innovation University",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            description: "Mobile applications developed for various platforms."
        }
    ];

    // Function to create portfolio cards
    function createPortfolioCards() {
        const portfolioGrid = $('#portfolioGrid');
        portfolioGrid.empty();

        portfolioData.forEach(portfolio => {
            const card = `
                <div class="portfolio-card">
                    <img src="${portfolio.image}" alt="${portfolio.title}">
                    <div class="portfolio-content">
                        <h3>${portfolio.title}</h3>
                        <p class="student-name">${portfolio.student}</p>
                        <p class="university">${portfolio.university}</p>
                        <p class="description">${portfolio.description}</p>
                    </div>
                </div>
            `;
            portfolioGrid.append(card);
        });
    }

    // Load portfolio cards when the page loads
    createPortfolioCards();

    // Contact form submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: $(this).find('input[type="text"]').val(),
            email: $(this).find('input[type="email"]').val(),
            message: $(this).find('textarea').val()
        };

        // Simulate form submission (in a real application, this would be an AJAX call to a backend)
        alert('Thank you for your message! We will get back to you soon.');
        $(this)[0].reset();
    });

    // Add animation to stat items on scroll
    $(window).scroll(function() {
        $('.stat-item').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate');
            }
        });
    });
}); 