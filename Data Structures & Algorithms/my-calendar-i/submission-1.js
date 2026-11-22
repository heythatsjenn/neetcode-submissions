class MyCalendar {
    constructor() {
        this.myCalendar = []
    }

    /**
     * @param {number} startTime
     * @param {number} endTime
     * @return {boolean}
     */
    book(startTime, endTime) {
     for(const [entryStart, entryEnd] of this.myCalendar){
        const isAfterEntry =startTime >= entryEnd
        const isBeforeEntry = endTime <= entryStart
        const isInMiddle = !isBeforeEntry && !isAfterEntry

        if(isInMiddle){
            return false
        } 
     }

     this.myCalendar.push([startTime, endTime])
     return true
    }
}

//[[],[10,20],[15,25],[20,30]]


//             [       ]             original
//                [  ].              start time maior e end time menor s
//           [     ]                 start time menor e end time menor
//                   [     ]         start time maior e end time maior
//           [             ]         start time menor e end time maior

//             [       ]             original
//                [  ].              start time maior e end time menor s
//           [     ]                 start time menor e end time menor
//                   [     ]         start time maior e end time maior
//           [             ]         start time menor e end time maior
// []                     [      ]   casos válidos!!

