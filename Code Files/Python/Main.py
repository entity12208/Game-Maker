import pyLib.py
import time

global time = 0

def init():
  print('initializing scripts...')
  pydat = ''
  asset-py = saved-asset-py
  
def echo(txt):
  print(str(txt) + ' - ' + time)

def clock(interval):
  time += int(interval)
  echo(str(interval))
  return time
  
def checkimport(name):
  if (import str(name)):
    return NONE
  
def pylib(name, action):
  
  if action == 'import':
    import str(name)
    
  elif action == 'get':
    echo('gathering files...')
    I = checkimport(name)
    echo(I)
  elif action == 'reserve':
    echo('reserved file')
  else:
    echo()
