def solution(number):
    visited = False 
    s = ""
    while visited == False or len(set(s)) != len(s):
        number = s
        s = ""
        i = 0
        j = 1 

        while j < len(number): 
            print(number,s)
            if number[i] != number[j]:
                ctr = j - i 
                s += str(int(number[i]) * ctr) 
                i = j
                j = i + 1 
            else:
                j += 1 
                
        visited = True 
        print("SHDIHSDI",s,i,j,number,len(number))

    
    return s

solution("44886")
    