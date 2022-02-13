class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummyNode = ListNode(0)
        carryOver = 0
        current = dummyNode
        
        while l1 or l2:
            if l1:
                l1_val = l1.val
            else:
                l1 = 0
                
            if l2:
                l2_val = l2.val
            else:
                l2_val = 0
                
            currentSum = l1_val + l2_val + carryOver
            current.next = ListNode(currentSum % 10)
            current =  current.next
            carryOver = currentSum // 10
            
            if l1:
                l1 =  l1.next
            if l2:
                l2 = l2.next
                
            if carryOver:
                current.next = ListNode(carryOver)
            
        return  dummyNode.next