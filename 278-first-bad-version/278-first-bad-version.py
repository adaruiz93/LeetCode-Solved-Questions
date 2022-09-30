# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        low = 1
        high = n
        version = 0
        
        while low <= high:
            mid = (low+high)//2
            badver = isBadVersion(mid)
            if badver == True:
                version = mid
                high = mid - 1
            elif badver == False:
                low = mid + 1
        return version