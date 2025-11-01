import Link from "next/link";
export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer__area">
                    <div className="footer__top fix">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="footer__widget">
                                        <div className="footer__logo">
                                            <Link href={"/"}><img src="/img/logo/w_logo.png" alt=""/></Link>
                                        </div>
                                        <div className="footer__content">
                                            <p>Thành phố Hồ Chí Minh</p>
                                            <Link href={"tel:0123456789"}>0327255930</Link>
                                            <Link href={"mailto:Supportinfo@gmail.com"}>vydev050204@gmail.com</Link>
                                        </div>
                                        <div className="footer__social">
                                            <h6 className="title">Theo dõi chúng tôi trên:</h6>
                                            <ul className="list-wrap">
                                                <li><Link href={"https://www.facebook.com/"} target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href={"https://twitter.com"} target="_blank"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href={"https://www.whatsapp.com/"} target="_blank"><i className="fab fa-whatsapp"></i></Link></li>
                                                <li><Link href={"https://www.instagram.com/"} target="_blank"><i className="fab fa-instagram"></i></Link></li>
                                                <li><Link href={"https://www.youtube.com/"} target="_blank"><i className="fab fa-youtube"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget">
                                        <h4 className="footer__widget-title">Cách Chương trình khác</h4>
                                        <div className="footer__link">
                                            <ul className="list-wrap">
                                                <li>Cứu hộ động vật</li>
                                                <li>Giáo dục nhân văn</li>
                                                <li>Bệnh viện động vật</li>
                                                <li>Nuôi động vật đường phố</li>
                                                {/* <li><Link href={"/"}>Homepage 01</Link></li>
                                                <li><Link href="pricing.html">Pricing Table</Link></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget">
                                        <h4 className="footer__widget-title">Giờ mở cửa</h4>
                                        <div className="footer__link">
                                            <ul className="list-wrap">
                                                <li>Thứ 2 <span>8.00 - 21.00</span></li>
                                                <li>Thứ 3 <span>8.00 - 21.00</span></li>
                                                <li>Thứ 4 <span>8.00 - 21.00</span></li>
                                                <li>Thứ 5 <span>8.00 - 21.00</span></li>
                                                <li>Thứ 6 <span>8.00 - 21.00</span></li>
                                                <li>Thứ 7 <span>8.00 - 21.00</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="footer__widget">
                                        <div className="footer__newsletter">
                                            <h2 className="title">Để lại lời nhắn nếu có vấn đề gì với thú cưng của bạn</h2>
                                            <div className="shape">
                                                <img src="/img/images/footer_newsletter_shape.svg" alt="" className="injectable"/>
                                            </div>
                                            <form action="#">
                                                <button className="btn"><a href="/lien-he">Liên Hệ</a></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer__shape-wrap">
                            <img src="/img/images/footer_shape01.png" alt="img" data-aos="fade-up-right" data-aos-delay="400"/>
                            <img src="/img/images/footer_shape02.png" alt="img" data-aos="fade-up-left" data-aos-delay="400"/>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <div className="footer__bottom-menu">
                                        <ul className="list-wrap">
                                            <li><Link href="/lien-he">Hỗ trợ</Link></li>
                                            <li><Link href="contact.html">Điều khoản & Điều kiện</Link></li>
                                            <li><Link href="contact.html">Chính sách bảo mật</Link></li>
                                            <li><Link href="contact.html">Sự nghiệp</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    {/* <div className="copyright-text text-end">
                                        <p>Copyright © 2024. All Rights Reserved.</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <script
src='//fw-cdn.com/12292536/4744946.js'
chat='true'>
</script>
            </footer>
        </>
    );
  }
  