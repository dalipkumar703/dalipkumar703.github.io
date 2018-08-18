/** Using single array space.
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m>n) return uniquePaths(n,m);  
    let spac=[];
    for(let i=0;i<m;i++)
        spac[i]=1;
    for(let i=1;i<n;i++)
        {
            for(let j=1;j<m;j++)
                {
                    spac[j]+=spac[j-1];
                }
        }
        return spac[m-1];
    
