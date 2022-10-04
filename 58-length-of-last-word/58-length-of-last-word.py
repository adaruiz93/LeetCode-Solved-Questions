class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        p=s.strip()
        list1=p.split()
        return len(list1[-1])