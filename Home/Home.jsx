export function Home() {
    return (
        <>
            <nav>
                <div class="logo">
                    <img src="images/logo.png" alt="Skill&Tell" />
                </div>
                <ul>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                <button>Join our event</button>
            </nav>

            <main>
                <div class="text-block">
                    <h1>SPREAD YOUR CREATIVITY!</h1>
                    <p>Enhance your skills while having the most fun.</p>
                    <button>More ${">>"}</button>
                </div>


                <div>
                    <img src="images/star.png" alt="Start" />
                </div>

            </main>

            <footer>
                <div class="text-block">
                    <h1>Meet our team</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, esse provident adipisci magni consequuntur quibusdam sit reprehende.</p>

                    <div class="social">
                        <a href="#"><i class="fa-brands fa-discord"></i></a>
                        <a href="https://www.instagram.com/skillntell.club/?hl=en"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/skill-and-tell-club-b5a051251/"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>

                <div class="slider">
                    <div class="left-arrow"><i class="fa-solid fa-arrow-left"></i></div>
                    <div class="right-arrow"><i class="fa-solid fa-arrow-right"></i></div>
                    <div class="swiper">
                        <div class="swiper-wrapper">

                            <div class="head-block swiper-slide">
                                <div class="image-container">
                                    <img src="images/profile.jpeg" alt="Name of the head" />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ea hic reprehenderit eum accusantium quaerat laudantium sunt dolorem veniam, id tempore. Assumenda magnam nobis reprehenderit quia veritatis blanditiis itaque doloribus.</p>
                            </div>

                            <div class="head-block swiper-slide">
                                <div class="image-container">
                                    <img src="images/profile3.jpg" alt="Name of the head" />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ea hic reprehenderit eum accusantium quaerat laudantium sunt dolorem veniam, id tempore. Assumenda magnam nobis reprehenderit quia veritatis blanditiis itaque doloribus.</p>
                            </div>

                            <div class="head-block swiper-slide">
                                <div class="image-container">
                                    <img src="images/profile2.png" alt="Name of the head" />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ea hic reprehenderit eum accusantium quaerat laudantium sunt dolorem veniam, id tempore. Assumenda magnam nobis reprehenderit quia veritatis blanditiis itaque doloribus.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </footer>
        </>
    )
}