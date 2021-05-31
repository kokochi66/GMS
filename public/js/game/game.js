function boxclear(box) {  
    while(box.hasChildNodes()) {
        box.removeChild(box.firstChild )
    }
}
function myRecord_setting(box) {
    $.ajax({
        url: `/game/${gameName}/myrecord?Userid=${userId}`,
        type: 'GET',
        success: (result) => {
            let i=0, j=0;
            while(i < result.length && j < box.length) {
                if(result[i]['recordGameLevel'] === j) {
                    box[j].innerHTML = result[i]['recordCont'].slice(3)
                    i++;
                    j++;
                } else if(result[i]['recordGameLevel'] > j) {
                    box[j].innerHTML = '없음'
                    j++;
                } else if(result[i]['recordGameLevel'] < j) {
                    i++;
                }
            }
        },
        error: (xhr, status) => {
            alert(xhr +" : "+status)
        }
    });

    
}

function myRecord_setting_Single(idx, box, point) {
    console.log(point)
    box[idx].innerHTML = point.slice(3)
}


function rankRecord_setting(box, level) {
    boxclear(box)
    $.ajax({
        url: `/game/${gameName}/record?level=${level}`,
        type: 'GET',
        success: (result) => {
            if (result) {
                for(let i=0;i<(Math.min(result.length, 9));i++) {
                    let rank_number = document.createElement('div')
                    rank_number.classList.add('rank_number')
                    let text_box = document.createElement('div')
                    text_box.classList.add('text')
                    text_box.innerHTML = (i+1)
                    let name_box = document.createElement('div')
                    name_box.classList.add('name')
                    name_box.innerHTML = result[i]['recordUserId']
                    let cont_box = document.createElement('div')
                    cont_box.classList.add('cont')
                    cont_box.innerHTML = result[i]['recordCont'].slice(3)

                    rank_number.appendChild(text_box)
                    rank_number.appendChild(name_box)
                    rank_number.appendChild(cont_box)

                    box.append(rank_number)
                }
            } 
        },
        error: (xhr, status) => {
            alert(xhr +" : "+status)
        }
    });
}

function rankRecord_setting_Single() {

}