[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion

 parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
 }

export PATH="$HOME/.yarn/bin:$PATH"

export PS1='\[\033[1;36m\] \u \[\033[1;37m\ee \W: \[\033[0;36m\]$(parse_git_branch)\[\033[00m\]  ⚡️  '

# ALIASES

alias start="npm run start"
alias test="npm run test"
alias build="npm run build"
alias i="npm i"
alias gch="git checkout"
alias gco="git commit"
alias c_pkg="npm run create-pkg"
alias nike="git config --global user.email trevor.casey@nike.com"
alias development="git config --global user.email hello@tcasey.me"
alias update_aliases="source ~/.bash_profile"
