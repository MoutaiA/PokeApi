import sys

filePath = sys.argv[1]
filename = filePath[filePath.rfind('/'):].split('/', 1)[1]

outF = open(filePath, 'w')
component = filename.split('.', 1)[0]

def createComponent(component):
    outF.write('import React from \'react\';')
    outF.write('\n')
    outF.write('\n')
    outF.write('function ' + component + '() {')
    outF.write('\n')
    outF.write('\n')
    outF.write('return(')
    outF.write('\n')
    outF.write('<div>toto</div>')
    outF.write('\n')
    outF.write(');')
    outF.write('\n')
    outF.write('}')
    outF.write('\n')
    outF.write('\n')
    outF.write('export default ' + component)

createComponent(component)