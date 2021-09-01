function eggDrop(n,k)
    {
     
        // If there are no floors, then
        // no trials needed. OR if there
        // is one floor, one trial needed.
        if (k == 1 || k == 0)
            return k;
         
        // We need k trials for one egg
        // and k floors
        if (n == 1)
            return k;
         
        let min = 1000;
        let x, res;
         
        // Consider all droppings from
        // 1st floor to kth floor and
        // return the minimum of these
        // values plus 1.
        for (x = 1; x <= k; x++)
        {
            res = Math.max(eggDrop(n - 1, x - 1),
                           eggDrop(n, k - x));
            if (res < min)
                min = res;
        }
        return min + 1;
    }
    
    console.log(eggDrop(2,10))
