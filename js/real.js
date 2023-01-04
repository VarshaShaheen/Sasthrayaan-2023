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
        image: "https://www.cusat.ac.in/sites/default/files/department/chemistry/chemistry.jpg",
        name: "Department of Applied Chemistry",
        website: "https://chemistry.cusat.ac.in/"
    },
    {
        image: "https://cusat.ac.in/images/dept/biotech.jpg",
        name: "Department of Biotechnology",
        website: "https://biochemistry.cusat.ac.in/"
    },
];

document.getElementById("tabs-1").innerHTML = departments.map(departmentCard).join('');
