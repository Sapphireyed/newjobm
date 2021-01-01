for (var i = 0; i < jobValues.length; i++) {
    var jobItem = Object.values(jobValues[i])
    jobItem.splice(1, 0, "pic")
    jobItem.length = 8
    jobItem[0] = jobItem[0] + '.'
    var tableRow = document.createElement('tr')
    tableRow.classList.add('jobRow')
    jobItem.map(job => {
        var cell = document.createElement('td')
        var star = document.createElement('i')
        star.classList.add("fa", "fa-star")
        switch (job) {
            case "1":
                cell.innerHTML = '<td><i class="fa fa-star"></i><span style="color: transparent">1</span></td>'
                break;
            case "2":
                cell.innerHTML = '<td><i class="fa fa-star"></i><i class="fa fa-star"></i><span style="color: transparent">2</span></td>'
                break;
            case "3":
                cell.innerHTML = '<td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><span style="color: transparent">3</span></td>'
                break;
            case "4":
                cell.innerHTML = '<td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><span style="color: transparent">4</span></td>'
                break;
            case "5":
                cell.innerHTML = '<td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><span style="color: transparent">5</span></td>'
                break;
            default:
                cell.innerHTML = '<td>' + job + '</td>'
        }
        tableRow.appendChild(cell)
        jobsBody.appendChild(tableRow)
