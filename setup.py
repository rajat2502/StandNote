from distutils.core import setup
setup(
  name = 'standsum',         # How you named your package folder (MyLib)
  packages = ['standsum'],   # Chose the same as "name"
  version = '0.1',      # Start with a small number and increase it with every change you make
  license='MIT',        # Chose a license from here: https://help.github.com/articles/licensing-a-repository
  description = 'An extractive text summarizer using Cosine Methods in NLTK',   # Give a short description about your library
  author = 'Aditya Kumar Gupta',                   # Type in your name
  author_email = 'adityaastranaut@gmail.com',      # Type in your E-Mail
  url = 'https://github.com/geekquad/StandSum',   # Provide either the link to your github or to your website
  download_url = 'https://github.com/geekquad/StandSum/archive/v_01.tar.gz',    # I explain this later on
  keywords = ['summarizer', 'extractive summarizer', 'nltk'],   # Keywords that define your package best
  install_requires=[            
          'numpy',
          'nltk',
          'networkx'
      ],
  classifiers=[
    'Development Status :: 4 - Beta',     
    'Intended Audience :: Developers',      # Define that your audience are developers
    'Topic :: Software Development :: Build Tools',
    'License :: OSI Approved :: MIT License',   # Again, pick a license
    'Programming Language :: Python :: 3',      #Specify which pyhton versions that you want to support
    'Programming Language :: Python :: 3.4',
    'Programming Language :: Python :: 3.5',
    'Programming Language :: Python :: 3.6',
  ],
)