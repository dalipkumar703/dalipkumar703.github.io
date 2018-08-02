/**
*l2.N->MTL(l2.N(,l1)->l1.N->MTL(l1.N,l2)->l1.N->MLT(l1.N,l2)->l2.N->MLT(l2.N,l1)->l2.N->MLT(l2.N,l1)->l1
*[1,2,4]
*[1,3,4]
*4->4->3->2->1
*/
var mergeTwoLists = function(l1, l2) {
    if(l1==null) return l2;
    if(l2==null) return l1;
    if(l1.val<l2.val)
        {
            l1.next=mergeTwoLists(l1.next,l2);
            return l1;
        }
    else
        {
            l2.next=mergeTwoLists(l2.next,l1);
            return l2;
        }
        
};
