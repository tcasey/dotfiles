#if [ -f "$(brew --prefix)/opt/bash-git-prompt/share/gitprompt.sh" ]; then
 # source "$(brew --prefix)/opt/bash-git-prompt/share/gitprompt.sh"
# fi

test -f ~/.git-completion.bash && . $_

 parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
 }

export PATH="$HOME/.yarn/bin:$PATH"

export PS1='\[\033[1;36m\] \u \[\033[1;37m\e[3m \W: \[\033[0;36m\]$(parse_git_branch)\[\033[00m\] 💡  '
