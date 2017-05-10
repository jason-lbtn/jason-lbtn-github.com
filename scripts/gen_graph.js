//  Graphique des intérêts
var int_ctx = document.getElementById("interests_chart");
var int_data = {
  labels: [
    "Développement informatique",
    "Dessin",
    "Sorties",
    "Gestion de projets",
    "Dormir"
  ],
  datasets: [
    {
      data: [50, 15, 10, 20, 5],
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "rgb(79, 197, 204)",
        "rgb(165,165,165)"
      ],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "rgb(79, 197, 204)",
        "rgb(165,165,165)"
      ]
    }]
  };
  var interest_chart = new Chart(int_ctx,{
    type: 'pie',
    data: int_data,
    options: {
      animation:{
        animateScale:true
      },
      maintainAspectRatio: true,
      responsive: false
    }
  });

  //  Graphique des compétences en programmation
  var prog_ctx = document.getElementById("programmation_chart");
  var prog_data = {
    labels: ["JS", "PHP", "Python", "SQL", "C#", "JAVA"],
    datasets: [
      {
        label: "Langages de programmation",
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        data: [90, 80, 65, 70, 75, 85, 50],
      }
    ]
  };
  var programmation_chart = new Chart(prog_ctx,{
    type: 'bar',
    data: prog_data,
    options: {
      animation:{
        animateScale:true
      },
      maintainAspectRatio: true,
      responsive: false
    }
  });

  //  Graphique des compétences de développement
  var dev_ctx = document.getElementById("dev_chart");
  var dev_data = {
    labels: ["Algorithmique", "Info-sec", "Back-end", "Full-stack", "Front-end", "Design", "Travail d'équipe", "Humour"],
    datasets: [
      {
        label: "Compétences en développement informatique",
        backgroundColor: "rgba(79, 197, 204,0.2)",
        borderColor: "rgba(79, 197, 204,1)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: [85, 65, 75, 90, 85, 80, 90, 100]
      }
    ]
  };
  var dev_chart = new Chart(dev_ctx, {
    type: 'radar',
    data: dev_data,
    options: {
      animation:{
        animateScale:true
      },
      scale: {
        ticks: {
            min : 0
        }
      },
      maintainAspectRatio: true,
      responsive: false
    }
  });
