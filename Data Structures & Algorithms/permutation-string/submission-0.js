class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let p1 = 0;
        let p2 = s1.length - 1;

        const charsObj = {};
        s1.split("").forEach(char => {
            charsObj[char] = (charsObj[char] || 0) + 1;
        });

        while (p2 <= s2.length - 1) {
            const temp = { ...charsObj };
            let matched = true;
            for (let i = p1; i <= p2; i++) {
                if (temp[s2[i]]) {
                    temp[s2[i]]--;
                } else {
                    matched = false;
                    break;
                }
            }
            if (matched) return true;
            p1++;
            p2++;
        }
        return false;
    }
}

//permutation === string that can be found in that substring even if not in order