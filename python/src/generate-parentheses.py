class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        result = [['(', ')']]
        tmp = []

        for _ in range(n-1):
            tmp = []
            for item in result:
                for j in range(len(item)):
                    tmp_item = item[:]
                    tmp_item.insert(j, ')')
                    tmp_item.insert(j, '(')
                    tmp.append(tmp_item)
            result = tmp
        result = map(lambda x: "".join(x), result)
        return list(set(result))
