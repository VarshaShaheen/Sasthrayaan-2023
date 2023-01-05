function departmentCard({image, name, website})
{
    return `<div class="tab-pane" id="tabs-2" role="tabpanel">
                            <div class="st-content">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <div class="sc-pic">
                                                <img src="${image}" alt="">
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="sc-text">
                                                <h4>${name}</h4>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <ul class="sc-widget">
                                                <li><a href="${website}"><i class="fa fa-map-marker"></i> Website</a></li>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
}

const departments = [
    {
        image: "https://maths.cusat.ac.in/static/media/slides_img3.f48b43b59a9273bf3eda.jpg",
        name: "Department of Mathematics",
        website: "https://maths.cusat.ac.in/"
    },
    {
        image: "https://cusat.ac.in/images/dept/physics.jpg",
        name: "Department of Physics",
        website: "https://physics.cusat.ac.in/"
    },
    {
        image: "data:image/png;base64,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",
        name: "Department of Applied Chemistry",
        website: "https://chemistry.cusat.ac.in/"
    },
    {
        image: "https://cusat.ac.in/images/dept/biotech.jpg",
        name: "Department of Biotechnology",
        website: "https://biochemistry.cusat.ac.in/"
    },
    {
        image: "https://cusat.ac.in/images/dept/cucek.jpg",
        name: "Cochin University College of Engineering Kuttanad (CUCEK) ",
        website: "https://cusat.ac.in/cucek.php"
    },
    {
        image: "https://cusat.ac.in/images/dept/kmsme.jpg",
        name: "Kunjali Marakkar School of Marine Engineering",
        website: "https://cusat.ac.in/kmsme.php"
    },
    {
        image: "https://cusat.ac.in/images/dept/stats.jpg",
        name: "Department Of Statistics",
        website: "https://cusat.ac.in/stats.php"
    },
    {
        image: "https://cusat.ac.in/images/dept/cis.jpg",
        name: "Center for Integrated studies",
        website: "https://cusat.ac.in/cis.php"
    },
    {
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFBUXGBcZGRkdGhoaGRkZIBkaGRoZGhoZHB4gISwkGh0pIBkaJDYkKS0vMzMzGSI6PjgwPSwyMy8BCwsLDw4PHRISHjIpIikzMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYHAAj/xABGEAACAQMDAgMGAgcFBgQHAAABAhEAAyEEEjEFQSJRYQYTMnGBkaGxFCNCUsHR8GJygpLhFTOissLxBxZD0jRTY3ODk6P/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAoEQACAgICAQMEAgMAAAAAAAAAAQIRAyESMRMiQVEEMmGRccEUgaH/2gAMAwEAAhEDEQA/AN3pOu6a4QFvJJ4DHYT8g0T9KtBXKDpWdba213M4gL5lsiur6HTe7t20x4EVcceFQMfauvNCMHpmUG2rZKopfd0sUqmsLKGraFP20jMBXhcpbHoZeQxIpLS48XNTzUbGnYUKq150BFMe6B3piX54ophZJZsxUuKFe9FMW/RTYWGG8KRXoRm9RUiD6/KiqCyV7kSRUiPNMS3IpxSKQxly8AY71U9R0jXCD5fSJqz1BxxkUHpXYtxPnNVDW0TLemVLaFx65jHf5Ubo+kBxJJHH371fqgGe9KxAqnmk+hLGkVadHUE5wYj6UeibRSteAobU6iKhuUuyqSJL98AUCbTH5cxTbVwySTim3b7N51ajRLYfZW35DFevXAOBmq62p7T9KstJZJHiqZKtjTsVGJ7UQop4UDivVDZVCUx3p9RXBSQD0aaVhUKmKVblMCSKQ1C9+lQ+tOgJGpjmlLVBeuChITI7j1B7ymXHpk+tWkS2UHsL0MWwbzwWyqeg/aPz7fetoWqt9nlA09v13H7s1GMxNOe5MY8vSB4NJsFUXtB1kWgUQ+Puf3fQf2vypRjydITdDvaDrotgpbPj7nnZ6Dzf07d6y+h6hqF8YvXYnwhm3Aj5NMifypuj0pusGuYQyQO7dz9PM96zPU/aW5buAMuzGFiVCyQB5/Wt/TFbJpyOi6f2puD/AHltW9UJU/YzP3FWKe0Nl+Wa3/fEfiJH41zTRe1VtztZM/2TnHof51a2uq6d8bwp8mBH48fjSrHLofqRv0uq2UdWHmpDD8Ke16KwqWFPiQ5/eU5+4NTr1DUJAFzcCYAcBoxPPJ486fjFyNbfacg0M1wx3qp0/XSABdt5jJtnv38LcD/EaOtdUsN/6gU+T+DPlJwfoaajQrsUsZmauulGAZPlQK2QcjIqa3g1M9qio6Zcm4KaaAS8akN+K5+JdhWyeaallV4qBtRikS4W70Uwsfe1QWgrmuJOOK9e0pbKmaW1oDPiIj05NWlFLZLbG2ndpI+pqZbBIo9QAIApSKlzKoqn0x7VPptLg7uKN204UOboOKES0AIAp0xSB6jc1AxxuU03KYaid6dATm7UD36He5TFJNVRNhPvTXt1QzFJuooCUPFL+kRQjvUL3KfGxNhj6qhnehWuUxrtWokuRKzmo95qMvTPeVaRLZnE6nct4D3VA8m3CP7s4+1F6D2pvqq7ypPlcWD91I55+tFLftEBSVMAYkHt5Uy5pbR/ZH0x+VbNp9oi69yS/wC2ZKFfdhGj4g277COaqdFp2uuHcTOUTzE/E3ks/U1Hq+lpvUrzuGDx9fOtT0/TBFxknknkn+u1RLjFelFJ2IumCIx5YjJ/gPIelc89qejXLt5fdjdCAEArPLHIJEDNdL1nwGuW9fvMNdcKsVKpYGCRzdtTx6MfvWLdo0iQdF9n7n6Sd6sFhyCQR3gcj1q31XRStt3B/ZJ/4ZoD2A6rqL13ZcvO6Ksw0HMGDPJ47mt3qUUadiy7gLZJExI25E9qnimgbdnHtPrrqAsGOCBPzB7jParu313UJbW4zMVJxIBznuc+fei0Ghu22LC7a+FjChlEe8A4O4xDfcUbqulhtFatoykm4dpY7NwU3D3GDAmD5GiKaTaLtMg0HtcHIV7YLH92VJx5GR+NWy9Y074YlD5Ov8RI/GqLp3svdF9C9shQBLeEg4jBBNFe0PR/d2rjqYyo+7KKaySRLUTQ6YD4rNwj/wC2+PqAYP1oxOs6lGCyjiJO5YJAIESpEc8wa5Kj3UKkMRJie/bvz3q21PXNTp7mxmZtoHxQ0g9sie3nVrKn9yE4/B1mz7Q2zAuI6HzHjUfUZ/CrTT6y1c/3dxWPlOf8pz+Fco03tXKg3LWD3Q/9J/nR+n63pLn/AKgU+TjbH14/Gj0S6YraOpKB3pbQzWCbqty2ga3ddl/ssjiACcbpEY7Udp/bQpi7aM4EjwySJAAzP3rCclHsalZtAk1MiVk+ge0pvO/vGRFAgDtuBMnd9OPQ+lW172gtID8ZIwBtPiMGI8wcfcVHNMtMuIrxNc+v9YQ3HuNpryvcAC+O6nvSvYqCBt5BxAHMzibp/V9UA5tWYtqxi0UIJmPh8UgZJ4/ZPfFTyCzc7qY71QP1e/8Aq5sFZKh8FwokywdT5Rjb3zTNT7UWUJXxlw0FdpBU558uPxHnV2qthZoveCl31mE9pi0m3prrrOGG2Dz9AccE9xQw9rt4Hu7LsZghmUHgGAuSTBBjmKFJMXI1F16hIJqVH3DilQqSRuBI5AIkfMdqvooHFmalWzRSClNLkKisug0xZqya2DUTWRTUhUBOlQ3Eo57YoS9VJiaAmqAtRDrUJtE1qjNkTPTd9Pe1ml21QqOde1XWfd3BbRLbEHxC5aRwQQCIPxA57GqzT+1O0eKyAP8A6N27b/4WLr+FXej6Vetm418PdhRtUrtkgHkgZAHmf9cv7Q2dtwKQFJTgCJm5cAMc5AHOePlWUm7s0il0bezrmUqblvVCYI8Nq6PP4lKtx6VpdP7R6YDxXCvnvt3Ej5krH41D7rKen8BVhqtbatW5uZEfDAJPyB/jTkyUR6rrFhk8FxHzwrBj645rn/Vun3G1Fy8AClz3eyWVYCC2QTuIyWSIE8itA9pb1wXVtpaAUgvAGDzmBjHNQdX1Fl7aKLgK8eAhiIiJAkxj+uauEYy0wk3FWim/8Pen3bV277y26eAQSMGA8+IY7jvW56wdukunytP/AMhrI2bdtSGW8DjKsHt9vPmZPbyq0DuQybnZIztupcUjyi4Mj0rSWFJUmZLK27aMTaX9Tc9FH/Lcb/rFaD2oEaOyPS8f/wCV4f8AVS6jRptI9ySHndCsnPhBlTEkDy7URe0v6baFoE29gYbsNMgAyMfvVLxSUGaRyxlKiq9gSza+6u5toF3w7jEhgJiYmtl7R3fd6W9cCq20MQHG5SQYgjuKo/Z7o50mou32b3iOrwqqQwLMGGCYPlzVj7Q3Te0F3YjC44xbJXcJcYMEjj1rLi0ui29mJHVLTi2DpgrshYG3cKqp946RsiCPBP1q29obWnuahw90W2FtJ3KdoDQAQw4yw5rNrYa3dsrcUqRbAM4g+9cxPyYH60X7VOP0i6WkrtsA9pH6piAfOKTXpsfua3TdBtmzajZcGMjhxBOPTFV9nQkyr2basSR/uliBJlsDBgQFNXPTNRcNu0ltBtVQbe8x2/a8zBNUF7VMbjA3GL7nUpaBYO0sNp3E87WPB7VyZ4ua0mvyJPZZXLdlX3IlpGBMkqdxJMgjBAaT5znNev291wG5cLEoPCoLKk+pYET5kwazupvLaVQzOjAA4M4Jy5IgmVJERih9a624Nu453jue0AiQC049a5Vhn1bGaPTaNVB/WuS3h3oICftAFRz+zkntzRSaTUWz4LlthJBbe4KxJAz8P09JmsQOotICkwDiTiOYjjzwPOpf057hljBGZlpI8vrP9TRLBNvsDb3tdfdrtu4yiSNruC5ZUGdhBEQSZiImodTe3btt0yFKSzOG843gmRJJjB8RyaqjYwr/AKSLSkgeJArYGRM+sHgYoS3otM8D9IZRPBCnGYGO+fiiPTtS9Xu/+Aajp7m1ahnLJExbd4djEnzwZ58zjz8bpe2wS6bYuHmTLbZjfGM9/wDSqO9bt22dFe7xvVRcVUaZ2szE+U4Az6EVW6c3GI937wxk7iAZPI8UT3zyI585iptXYF9prSoqLcCPBYbla4ZLFd8DbCuAIETnsTV30zqbI7KrhbSRNy8u5mJA8MxjIEc8iazGo1rWrfh90AwLGbgLs3GNjQ2IBIzzPoPpvaZhc23C0DPIODPnOePtQpZatbCjpOm9pSyXRchWVG2soaS4JgbRnIIjtyM98NZ9pNTZZ7oxDnduALEGA2CBIkDAjifWrPSa5bob3bqLg4DAAiYOJMMDwD8vOk02oe6Yu2VAIyQ+0STDK43DIkiD3pR+rmvuj1+dgF9K/wDEcS3v0ENHu9p44kNJJA7zHf0roSXpUNBEiYOCPmK5br+lWILm3MADchkieDG4gtIAkg+sg1d6b2gve9tl2PuuCotgyApM7gTJxGAJJ7Zrox/VwkOzdK1eImql+uWlH6wshEeFlM+LjjBxnHFe03tBp2mLoH94MveO4FdPOPyOyz93SPph3qZHBEinADvVWFAKWBPFS/o48qncCo/fAAinbChn6EncA1F+hL+7XjepP0yn6idGG/8AMMYe3cX6D+DT+FI/V7D/AO8X/NbYj8VinW+s2G4uIfqKl97af9w/QVvoyAdd15SVWzDv+Q/n8/xqTp3Ty53XP1jkyZJ2g+pP5fhUf6FbN0QAARmMTkRxWq0VsKoAAA9KG0il+Cj9p9BOn2EzLL6DEnA+lc3/ANlXAzbXB3SFH7pmBNdb66JRR/a/gaxdrTqXbJjnPYktxNTKPKKLi6ZSaDQXtpDfEuDtOO/l8qh1ZuW0LEEwfIGcx3rV9NUK8HvbuGf7vuu3+Kp+qWFNrwxO4enc0kpRWmJtN00Yu17RXAVy0kSMt6nzInntVvoPbAIw96rsSCBlZjHoJ4qu1elQcDJG4emCa9rOnL+qMZ2mPntB+lUpZOLdj4QT0jU6f2n0zD/eEfNW/MAijLPUbLfDdtk+W5Z+3NYfQ9HAO394qR3ySD+QNJ1fo7KhIMZAn+vlTWSdW0JpXRvbqqR5jB9McGqPqujtvuZ7atMTPJ4GSM/j2rED3iEwzKO20kflTU6lfJKi45EgDc0z/mqvNGvUgcPybDTdZW06IDhR4VJERwFBORJjOaBe3b3l2ubAXdiQu/JDiAVI53zPHrVX0fW2k3Ndl5nGIYyCBKmWnvuIABODiQdT1MMTC4nwyZIA7SAARHaIrllllKTS0gUQ/rqFysEYtgQZHG7PHHao9UxCAkhvCBkyQQIiP4ek0CmvJuKzcLGDPA+Rnt2prXQQMeLuZiR9T8/vS5N9jo8jhiBOT6ACe3B/qKXTGX2EwMwTM4kAc15Hx8J/OPURXltSfCNzdoBlpmRHnVUkMM1OuuKFEqZUGP3SgZcGfr9RQ17VMSrEnPEADyBgDE/96R7TMYaQQI8p5BJHY/ypi2ydk8LgecA5P4H7UqiBY2eo3tnut7FXMC20Fc8ETIBPn2NX2k9nbtzS3CzFbinwWywJYSYGDAPeOYDfKs7d2D4IMbpBUGAT+ySMHM/TtWu9hWt7dQ7Bg4tk2ySRAVH3WyVwOFPY/wAcXF8vTX6ABs9EupJe7bUCQy8Rgkbt2NxM9/WqbWC7bneBtViR8LA7oOSJkQQP8Q860nWutadnRLbG3aURdO03GcgsFKh1gSWmccRyBIul0lorIuXDaJDShA3F1EhpXn9nbLEGYgisqlDc6f8ACAAs3GZwinZdDZCLAcjzJYKDk8Dv3orVX9Q9zbdRkLKGCFCpZQGgwOfhODnB8s29jodu2fBbQzDM11jIB8QADTtHcyZO2DzXnu3XJPu3RQRtFwhSwEHtlUw3bv3rGU4N6X71QijTr7WnZWnbMAlWkqYJ8MjdjsSPxmiLftMHbKAQCZUlcTBxPhPHn386K6p0ZryKy3LQZTwfCYbuWxkFTHPpQV/2fu7N3vFdF2swQBjH7QIO2QDiI880qwPvsZba7WXr5RX91cthdsTJQAgn4QCuNok+XPek6TZtWiiXARLE7xdIZQfECLfu+Rjyyc1VJ1Bm3KjqmRkK6nduwD6naOf50LoNX726Tc/WGRuC/E3aVI4yf2QZqlGXTEdY6E2ltsTb1LsbhG1HY4HIAVhIrQm/Fct6LbVLm5EunB/3pNvdz+1AL8fs5xxmtNoev3W3odOzvbMMFPA4ABJ8XHOODXVinemh2aZtQaGd6jtajcobYyz+ywgj5iomJPFdKQmx7PUfvKT3Tmvfor1aojZwW7bvLcKMwMOVOQ3Bg/EKd0vU3DdS3IG5wphVHeDkAVfdRn3jsdOD42IYrcE85wwmfOgugWd2oVzYVVW4Zfe4g8jDsd3I486xk1B7Zono1/SLLLeAYyAuJycnz5rcac4rKIji7KlCCoIweM95/h5Vf2Ll0D4LZ/8AyMPw2GrcotXHozQnWXwtYzRXIF1yQ22Jzj0EkeR9aveo625cfYLe3a22S0qzNHwmJgd8Un6EqyjqPUDg/wA63jG4r/Y7ooLl9V9xcY7UDAucnDIjRAGfEFoPU9QL6hjbvp7raYBuAAL7sjb7sid++CGrV3NLbKMoXngETmAB8uBVNc6SjO4Nt1DGd6hfIjbn1J+9KcG+gUyu1aqLXxAsBBzONjD8zROpQ/qlHEZxx4cGfnipdV0Mtb222ZiskD3eZ2lQC0xGTRuo9nrlxkbcF2iIM5+1Ul6WO7eiht3TaQXGXK3BiImdyr+JFL7RaoMfcsCCYeRBA+LaIkE5B44xWj0nstbFtkuXHcEgyMERkQSSeaOHR7Ij9XvbIDXCbhE4OWJilxdUg47s5lqBLPk52/l2qpa6UcGN0NGc+Rrsd3ptg82bZPmVFA3vZjSXPisjmfCzLn6Gs3DkijA6rUe8WGUT2IkQCZI9ZOfn8zVKEHO5JGdp3Tn5iD9DXVrnslpmPh94vyaf+YGqnUf+HdskFL7j+8qntHaKnxNdAjBMi/teXyBOY/KjNEvMW1IKmS8QAM7hIPka1N/2AZmH65SuJ8JUkCZjJzn8KJv+yW20Vtlt8Y8awSOAfCMfx+kDwt2JsxFy/MHaoOIK4H27D0piapgYUx3xPbg8/OrDUez+oRvFbJBiSCDwSPOYwPvQ9p3tPt2bIIILKeRnGJwR286ylBxW0Giy0fVLSrFy2brRHi2qqgnO3li0YnsRMd6nt9ct2FCW7Z2n4pcksCYMgmGG3AGOOe5KTTWtQtu5fa5vO6YKKvhbgqDuEmeAIwcUa1rSgztszAJzuK9j4WUehk9jng1xyaben/QUVnRzZvXiq2C/BXa21PXedoYDtknnin9U9lroY+4aUUyAWiYySTtCiJPczj5Va3NeGBt2CgWCfCF2qs5diJxkcT3+jrmue3sBZCo7oS5MccnPfION2PKs+WRSuP6exgOt9mb10W0a7bhUiAkHgHaNqgGTtEk9pz3M03RkVVG5bagAAlFlzAncSi+PAE84J8qAT2jV3YMjhlI4IhiCBLAxBzEevnUfV+pWbiqBddJYqSdxFoiIO1ZlSJmP+5WabSkyi/vGzklpb94gEKP2exkCIBny8sV+s1z5BcXEiFLFWDzEhYkSAxx2zBrK9RLWyAtz3tocOVZZBJ4kyQZPBJgHgCnrqHtd2tk8q8qwBE8cxEZx2qv8bju7Josl1JLnawDACUYbhk8iJ+cH6dqM6drHuNt2uRIXklYjaREEFeOPOMzFU7XrgG43GG4GDPcAZ+fr6U/TdYdWKG4YnBWcMYEgk+nyzRLHa6A0Gv6aLrhUtBjBi5bhRuAkpIQzyZBkSPOss+lNqXO34jKO2x1KloVgYlgM+HzFaro/tIEcsonEFmQDgg5ALSQZI/hVhqdZbusLl7bvDblIXaeQZ3KCGwD2njzNTHKoKpJgZLR64+8S616GMzlmYDjsPyJOO2K637PXrQtjfqlu742SfFxwfWZx5EfXn2oNstvVEYuRIO3MFoLArE+UDvj0nTprKu63ZcopIYoSdsgTBkwvPpAqo5XdpAdR2W3yrefBBpWRF4rm2n0t3ADkW3aVYoxCzBFx5UrHYsOM+U1dJ0nqSGfeqw3SfGWxiIDjAGcT2rqhkcldCNPdu1HuPrU4WAsxMCfn3qT33oPwroTEcv1HX1YFTuAK8ruB+Ugf19aht9UtKsbdk9xuYRAk7SCVbt9e9PXqNpWNss0jJbJnHAMxAg8AUHreoWmGy4VDBicMAxUjwie+DwfMxzXO0m027fRK/gbqOoqYW2pZ1PhduSO2cH6fwMUemo1N1QLlzasZEgTiJxz8iTQnTBba5KmSAuVJWcRugcTWv0GnRR4VUesD860xYlHdDuigs6u3YW1cvXHMFiAA20QTu8KiBBM1N/5u0bsz+9gYyyuOwHlUnX9KHtOSMgXSPqWNc0uWbaIA7EqxMFT3WP7Pr5VrzcOi0k0dSTrWnIkXbcerR+dI/VrOIu288HesfecVjdFoQ1tT6H/SqvrGj8AUQJJ5+laPJJK6JpN0dOHWNLbGdRa8zDgz9poW57YaNeHd/wC6h/Norlradtxb0jn1/lQ2pX9Yo9B+ZrPyyZpSR0u97d2/2LJ/xOB+ABoG77aXDOEUf2RMfea5spA7/nU+nu+JQQYJHepeSTGbs+2lwd589yD+EUdo/bItgi0T8mX+Jrn1m4rTG7tzHef5VE7mTB4OOPWkpte4aOrp7S92tfZv9Kg1HtxYVtrK4P071gul9YZDtc7l8z/H+f50Zrli57y2GbdEjYGA2jHz5ny/Kn5JfINI3ul9o7N1CU3nIA8VtdzE/CCWwfmOxoVOoM5Jt7+fgjdiQCQwhT3iCZxWJbU37yBM7FWI/e4jvCrjEevOKeumvqoAcbc+ElgM8yOO9YSlkk7smrNUuht3GFx7h2jcfiVgxgkDbAIORnuTxiSVd6axyFtbCzA7kJlJEeJgIY7ZO7H2rJaW41sRdIIX4AzkiZGEwIPhXJMQKKTWB7bm3ccOoJZjmSN07W3eJSAZWCcSRzXPPHP5DiJ1y1qF2+7C+7Sdp97MxtIgM07gBEDis2FvPuaGgZYAx4SfLyn8a0up6i72xbuXLY2lWZCBuwAQwJG3J3Spk80Fa1JuT7xg1skCFXYWyMqqAA8KJPAitYtxWxANvqN0EAoCC4eGkb4GFY4lftxUK6m5ddt1zC7mAkYgR4QxyY4AzS6vSAQQ+DJEg8RMQO/b6UEHIMoxLYwAeOImrST2iiViHghju/aLEY7eH978Io5OmDaWfcJnbJAJMj54icnyio9PcTHvJDSsZEKARkHkHnvGe1O1uuYse4XtIMR27+QpNv2EEIltVnYMwRDEkZIjnMAAz/OKHuJywEqSSc95k8d8/jS21DSzqu3AKg8E8EiZIj86ttH1E7GXegAMncQB5g2xja20MOe44qW2hFJKgwNxWfgkkjiYjn7T86I/RXILKCU4JyeJ7/Q07qN+0bg2qVImWGd5gQ39n5ZiTRSdXUJ7tSbZ2gbhC7TjePDl5iJafkJkFgEdF0VliGdvGJOwzBESH4PEz5HHrV4ySpazcVSuQHVVRtsAE8lpnBwMifXH2tcVYFDlcSBO7Hcdx24zFWN3qwaSHJYsTsOEjg5Jk8AyRiBzyMJ4m5XYEr3DaZTeW4siEgqwbiVJ9Nxnk5FXHTusorQtwr4QYUvOe4YbTGR3P0rM3OsobPutmJwWctHEwBAHAj6znmFkZSLiQARIDZIgnAby5x3iqlhTA6KntbqbbKX23LUT+wSQe+ADOe4kxWq6T7QWtSga2SJMAMAJP0Jg4ODBxxXMfZ/qdkXLTtaCbcbxEiYBkN4OD3Hz8zpfadLKtbXTW0RgWuOtsQd6HAKggH9qCJxJHrthk6p9iZtrjCl3r+7+FA9F1tu7bRA5Z1tozzJMuA2SQPPvFWmxa6bQHzs+qByE2scHaSMbYmZ4zx5CvdDVmvFN5I2GZ7RAj8e30oRtPcEbkaDxg5wSY+k1Z9H0Ny3c3MmybcgyGkEj1xxOcxHY1lCCTob6L3olrZcb5/lW20rYFYPpy3GdthkjcTCzhRJPyAFanoesZ7ctEh3WQInaxExJ8q3tdGbE6y/6i6f7Fz8d1cw1tgvbT3ak7Tc3ZBiWxBxOB2FdD65e/UsoPiKEDMST5VkdICttrb/GxgnmBnMk5xHanNdFwLfp2oC2wCGxgwpIB/o1WdfAKWvU/wAKMt9WFu5GxmTM7QcyAAM4MRznk+dC9RQsLQWJEEiYxGf69K0k1KGiUmplXt/WP5wv4xUPUkYXBkQFGB8zmKPuWm3uY8J2x+E/Kq/XX5uGcErnnsGPn8+1YSjSNUyquXDPb/Kv8qk0zEsOO/YdhPlUV/4m+dS6L4h8m/KsxhPTxJPbI4x+9TLh+MwPi/8AdU/TVg8z4h2jsag1PD/3p+8/zoYEQf0H4/zrQdB121gjfCRx6dx/EfWs0r4ijku7SjDkKD9hNNaYG92Dtx2qDUQqljwAT9ql6c+62D/XmPwNV3XnAQKT8U/gP5kVbiibM1f1BuXQW48JA7DBOKkXqFwlrZc7doAHoJ8MeVDERcB7Qox6CPzpyIwuFoMEeVRRQnUXIIk5IBznuZPqah98QBHcR3FFa+2zcAnA/Cf50x9MzKoAGPx5p1ZNkFy4WEt3iP4/M0f03U2rcG5uMEkBcEnaYzOPFHnQ2osxYtnE7iJHfJNG9D0G9bl11lbYkDtkGSYzwpyO+e1Zy1FjA00d113gEyTCCSYVQZgdoI+cU46N1RS0AEt3iChzPlWl0+qW0+5l+JSGtuCCDbIhvhyCrH61VXEuXU2rclLl4gIBBgsSDkTwswPSayU5N76AFXSlbfvIRyScFmJHbIiMzgz5fKhHkkGIxzyMeo+1XS2mNwxZVkCbSGgQyoCx3KZJkExOR5VY9K0nhFu/a253JkrAbuIMkyI+g8qXOlbAzNknxLPhIzHpkUxrTDJMj1/15rXLpLDW7rSUYM22V94LijJAZQQSc4IHeGArPdT1SOoUWgpB5GJGYx2wRimpX7ABIrbiUz8vw9f6FQs5yJ5osaVSEK/G0yOROeIz2qMacGYILfugtI8zG3PlzVKSAGK+pqy0GqKkLJK+ROPqODQ1iMhgDAPnM9vnHlVha6aptm5buKYEwQwIzENiJzgA/PzpSkgZYaezbDBrdzwiCZBBXzIPB5j/AF5sdatzbgKNhwSBLKNwQYBI3EtnAMgHsKpOmAHcDtM+bECPLwsMfWtPpOpWrdwe9tutraBFq4F8OWDAMCSPXcOJ71k+SaaI1ZN7LdRU23SLoYkRDsIxy0IAfv27GSVva28WPBz31MHGM+OtJ7NdE0d3SJc95cPvPG5FyNpYlvdmBMrIWD5etH/7B6acsDJyd1xgc5zXXGddmqi2tI51r9Lda5at2bElATJVnDwApYkiC3iiACAe1Uj9Qu2ztuWyGBh1YbIImV27Rt7YEDyor2nN2xdUb0l7Z2lNx2odp2ycTKHEY3GeRFTqNU98s7b2JZcmZaF28gQYCqMAc1MZelNMzrRZ6YIUBd3Z2LEKpFtVEwGLMssZjA/7L0j2hNuEwV3OzcySxJx5fhVLp9Y9q6tyfHbOD5QNpEcZGKn/ANn3bgDLavEEDbttuRt5AUgQRntTcvcHEvekfpGtvNsDbUG2JAG4RI7eQxjLeWANqtf7u+9u5vQiFMKZMAnn54wJqtsdQuWD7u4jBQxLW3DoSWjM8qQQDiJ70P1SzdZjde3dUEyNyvtExADMO3meea0WVpB40abXapLdoXDO2RAIKkldpZRuGYLATkfjQGgupda5fFsoxG0ASygHGWyZG2STHOBQmzUXrSW1t3bq2pHhDPAbaQkwYAAEDtXul6+7YW4gW4BcUqF8SFSOJMDmBwexxBIp+W3Y1BdFg95BbYb1JMQAZ8qz+steMtuXCkR4pkqQO0d/OnMXPhMCDwSJHof+1NGnnjn6UTyKSSCMaK69bJZjGCT3HnT9N4TJ8j+MUYdK3lTf0NqyKG6e4BPi9Z44HrUdy4sON0yfL+sU86FqY3T3qr1QUItgEv8A2Q0R6Bj/AAr3vBjmQoHHpHnU9vTXBukTuB/Gf51GdG3kaQ6Np7O3d1ofJfyj+FAe0TzetpPCgn/E0fwoj2YuoiEOwUgD4iB3bzqu9oiHv77bAjYokERIJNaya4kLsq7moBGccef8qX/aKxE/gagGj8yI+dIdGs8/Y/6VnZTQSusx6fI17SpccShcwTEKDz9adauBAACxUAwGAwSZJkH+vKiOj3Tb4BKmfEYUEgE7ZyN2ZEkcUWKiqbUMxVH4VjOI5OcCPUfWtL7OQ5uEZCQdrAw07gRAOfr9Kz5slnZ0KmXJiYOSTGRB+lOTUXLalEOG3BxAMg8fmeKLTGHa9XFxtikIZwNxAXmCTmRAn5UDpnI4JBAMGYy0A/8ACCKj09y4DB3gfNopWAkHjFRQFz024AQLkMgkzLTJBHBkRBPb71dWvcNEC6pE53q05PINoSfrWZ0KvcMW13EZMEdvma0PTelaguUKqkKJ33EUw0kYkkdqninoGqVsY/S9hlXkZkbSCBPkDH48TTbehOCLa/ETk7isEZkwAInzrUaP2Z1Lbme5ZycBGDHb9xLc/hV7pPZO2qAOmpY8n9ZaHeY4+lEsTZNo5lZfcSqMFk8FQZj4uFyIJ7zioOsaG3bCtbYM8w0SIyIIHOeK6qPZjSAk+51QJng2m5+X9Zpj+zGkiAdTjzRGImecDzqY4Gnex8kcq6WqIu8gG4HAAfcAQ3r2+vY1apq7VsFHREchjtRXcGcAkkxMqa1Oo9hxk27juCQ21kVDgAQGZo7DtWb1mjtpci9a1iufDJ90O5OCTB55mqf06l3ZSnxMvp+nLy7CfBCy3i3R324xRy+6ICqiAAEmFeWlojPkGif7IrVaHoekuwvv7tplCx75LYBKxA3K23cfKc58qJ1XsLfthWtlLoCsCB4GIJBESSOB5/etHD5I5Ih6Z7QWLSolu0yIuG2xuYQIYknxN2EnH4VYW/beyohUusMkEoO5mMeUx9KzSdD1nC6ZzEbshMf4yJ4PE9vOi7HT7yKFOluSOc2v/fWfjgzVZZLovb+hR9SYtjGnU+EbMl3OSrDcfD3PepdRoynu3BcAHaRvEhbu0ADxEfHs5gc0FdJuXGK+9tlggYhiwUqWMBiBIJuERgQBxmn6/VWivuyAjOhLMbtzEx4mCmGb0J8u2Ryr6iMriZqaCNVbVWjYdyjcxZ4MeY2tOT5+vNWnSrLrYsgW1xatj9lR8AmBWd6VfuXAC8jaq7GLLucwV3hFJG4ncQJ798CtFpNeGIB2keLxBfiHE899o5/eEVMsyhr+xqaQctpv3V+pWnPaP7v4j+desX7biWwcggqQcEgTPFTC3bjHHqBGfpWqmn0zdb6Bjab90fcfzpTZaMfmKK92sGAB8opBbHb8hQ2Ois1PT/eD9ZbVx/aVW/MYrNdT9k9xLWW92YPhaGSe0H4lP0I+VbwAfux8gPypSnz+wpqTXTDjZxjW9I1NszctuB5hVZfnKzH1oS1afutx/kCPyFdtY/2Z/wAIpV2+RH0IqlkZPjONe7udrN3/ACN/KvDS3u1m/wDS25/hXZSB86QIvdfw/wBaflfwHjOOf7O1B4093/I38qZd6PqeTp7g9dhrtBtp+6PWl2J6UeVj8ZwYo4JG0iPTNNexc3RDT5AH8q7yLVuYgfYUJqOj6Z/jsofUqJGex5H0o8pPjOHPYudww+ePzpn6HcgHY8Hgwc+ceddtu9C0zT4CJ5zu+4YkULp/ZnSpJKs5PckAj5FYin5B+M4ubDTEGflNF9PWypBvrc92TG9GIiCPFEeIr5AjnzrovVzbsXLg0yKr27dt7jtLeBm2lZnwgSm4kZDcgAmhui9Z0163ct6l0BdmfxBhLCAihgrFUHfg5PrO8FyVmUlToyPWenfo7FSbVxWCPbuLEsrhiCAH8SYMtB7ZzFUok/LmP5RxXULPQLV9SouL+qVEWGW6gkbyEJBKrkYER5CmN7KrtEXbODjt5Az4T+dZyklKi1C1ZzdLpxkiO+T9ODRWmuXGY+7UkgEwBwsZnAHpOK2V/wBkVg7biM042loA+qfxp+n9l/dtJMr3yAfkDGJxnMdquMXL2M5SUfcX2J6NfvFmNx7VsH9YysUE/ugA7WaOSRjHJxW4t9M09gEI9xdwztCEHzYyDuPqSayb6zUEC02ka3aEAC1cDDaOABg9yc/ead1BLa2wbdy6hHKuHVc8wDj7VtDGl7mEpNkNl0uXXmfd+MgqokgTsxx5fStH0DRm5jaB/dwayvS+oaZX/wDibak+EjcRA+3FdI6DrdOqAWrtu4xBPhYNgc8HH1q8k/gUI/JV+1OvOk07EXGLfCo3PIc9uYIjMVnug6JNiNq/e3HYbmYXnBE5AhXAxVd7WdZTVXgqyy2m8IAJ3mZa5A7c/IChf9u6HbIv3Q3l7kx999JxcUl8lXb0W3X1tWb9p7dy97m5i4vvrsgqQSFbeSJWTg9hUl7V6ghv0cXguSpa4bkqucrcBkkD05rP653v2Uayr3Tuldq5jxK0icYo3RDqUAhbVohQo3kIYAA8QIg8VAwvV65LluHdLbl9rstvfua3lW2AiJU8xHlRvSes3bd1pNs2oBUIl235yqo25hAEk4XxY8xnh7JXfCXv2VYt3bHwqIETuMJ+FVfWrd/RNG9SrL+rZGO1g2Pn8xRaXaBRb6OmXuo6XUhT720pBEG5b2kDuAWJUT86Pt9OEDacdoJI+kNH2rkOnbXe7Fz3yuMH3bCQwPA+GBIjBI5zEECSx1xyoK2lAI4DXRHngPjM0uGOW+ilzXRpLd+54gS1xS4Yk7VDfY44JkrkzQ3WiPdkIHdjADIA4BYhSH2EgkCTDCTI8jXq9XiqKtMyQB0/SXVb3bKpVDvC3LZUw/hL7Cu6N2ctmPlWm0NtYEsHBgb3lSNuAFJJxjjkY+der1Z5tjZHf1DAlkuAJt3MQIHGCsmC8j9oZE/Q3S3mgrKghuWCxtJIBzEnj08q9Xqx+1aLhNx6Cr98LGAT3aDwcA4GO33+lQprypUMNuBhSMlgcQTMxmJ75r1erN5Jcuy3mnfYR+lNjJE8ZBkk47GnHVOCASZx28/mMflXq9W6zSO1SZ5+oOvdvTn+VQLr3/8AmMc+STnsMDj1E0terbm7OvxxoITWk43H7D50jaonuAPKO/1pa9V8mTwQ03nz4yPSK8mraIJbvntH3NLXqnmx8EJ74nJOPvj51IbpA++cmvV6rUnRLiiJnDYG4/8AD+NJ7oHsT6E8favV6jkx8EYT2iuOl6+bngLWiqAeIOjgJk8zImexWOImi01lLZVr2la4jGWJYhikE+GOAAPOZz6V6vV6OKTpHnZVs6P7L2LI059xvNvcWhxnIBXdK5O0rB71PqtZaN0oVlbX7JMA3TG8kAyAuFA+Zr1eq/poKU3YvqJNQVFjp9ZbP7Kj6VZ2Vtt+59h/KvV6uuUUccWFp0wNwE+wqZtDs5dR6Qo/OvV6uZydmyiqKzX6+1ayxUnyEE/Wsp1f2oD4CgASJmCJ5yIr1erqhBVZhKTswvU107iE2qYgne2PUQY/CnaTW6NAPeWbd1wI8NuATHJmJNer1Zzey4k+p9rrht+6s2/dW8RtgbRM+ELtAP1quv8AXtQxMOFE9lUGPxr1erDmzVRRE+rZjm65wY3QBJBHAPrg0b0vQPqR7tHthyZDXFDgbQWgAgxMGTHlS16olJ0yopckXKdG6hbti3ttPtACnewB2wF3ArmMdxwKoP8Aytrh/wCkv/7efX4u/P1r1erB5JHR40f/2Q==",
        name: "Department Of Computer Applications",
        website: "https://cusat.ac.in/dca.php"
    },
    {
        image: "https://cusat.ac.in/images/dept/dcs.jpg",
        name: "Department Of Computer Science ",
        website: "https://cusat.ac.in/dcs.php"
    },
    {
        image: "https://cusat.ac.in/images/dept/doe.jpg",
        name: "Department Of Electronics",
        website: "https://cusat.ac.in/doe.php"
    },
    {
        image: "https://cusat.ac.in/images/dept/din.jpg",
        name: "Department Of Instrumentation",
        website: "https://cusat.ac.in/din.php"
    },
    {
        image: "https://cusat.ac.in/images/dept/photonics.jpg",
        name: "International SChool Of Photonics",
        website: "https://cusat.ac.in/photonics.php"
    },
    {
        image: "https://cusat.ac.in/images/dept/psrt.jpg",
        name: "Department Of Polymer Science And Rubber Technology",
        website: "https://cusat.ac.in/psrt.php"
    },
    {
        image: "https://cusat.ac.in/images/dept/shiptech.jpg",
        name: "Department Of Ship Technology",
        website: "https://cusat.ac.in/shiptech.php"
    },
    {
        image: "https://cusat.ac.in/images/dept/ses.jpg",
        name: "School of Environmental Studies",
        website: "https://cusat.ac.in/ses.php"
    },
    {
        image: "https://cusat.ac.in/images/dept/ncaah.jpg",
        name: "National Centre for Aquatic Animal Health (NCAAH)",
        website: "https://cusat.ac.in/ncaah.php"
    },
];

document.getElementById("tabs-1").innerHTML = departments.map(departmentCard).join('');


