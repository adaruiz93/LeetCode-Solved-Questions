class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        longest_prefix = ''
        
        for first_chr in zip(*strs):
            if len(set(first_chr)) == 1:
                longest_prefix += first_chr[0]
            else:
                break
        
        return longest_prefix