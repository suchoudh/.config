# ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don't do anything
case $- in
    *i*) ;;
#      *) return;;
esac

# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don't overwrite it
shopt -s histappend

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize

# If set, the pattern "**" used in a pathname expansion context will
# match all files and zero or more directories and subdirectories.
#shopt -s globstar

# make less more friendly for non-text input files, see lesspipe(1)
[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# set variable identifying the chroot you work in (used in the prompt below)
if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
    debian_chroot=$(cat /etc/debian_chroot)
fi

# set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
    xterm-color|*-256color) color_prompt=yes;;
esac

# uncomment for a colored prompt, if the terminal has the capability; turned
# off by default to not distract the user: the focus in a terminal window
# should be on the output of commands, not on the prompt
#force_color_prompt=yes
force_color_prompt=yes

if [ -n "$force_color_prompt" ]; then
    if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
	# We have color support; assume it's compliant with Ecma-48
	# (ISO/IEC-6429). (Lack of such support is extremely rare, and such
	# a case would tend to support setf rather than setaf.)
	color_prompt=yes
    else
	color_prompt=
    fi
fi

if [ "$color_prompt" = yes ]; then
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
fi
unset color_prompt force_color_prompt

# If this is an xterm set the title to user@host:dir
case "$TERM" in
xterm*|rxvt*)
    PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \w\a\]$PS1"
    ;;
*)
    ;;
esac

# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    #alias dir='dir --color=auto'
    #alias vdir='vdir --color=auto'

    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi

# colored GCC warnings and errors
#export GCC_COLORS='error=01;31:warning=01;35:note=01;36:caret=01;32:locus=01:quote=01'

# some more ls aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'

# Add an "alert" alias for long running commands.  Use like so:
#   sleep 10; alert
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi
PS1='[\u@\h \W] \D{%F %T}\n\$ '


# Aliases  - to sort alphabetically 
alias addH='/home/rahu/Dropbox/100_admin/addHeader.sh'
alias chkNet='ping google.com'
alias chkMusic='mpg123 ~/Music/Nescafe_Short.mp3' 
alias cls='clear'
alias DailyQ='~/Dropbox/1600_RoutineDRAMAL/_Routine/Beta1.0/DailyQ.sh'
alias DQ='cd ~/Dropbox/1600_RoutineDRAMAL/_Routine/Beta1.0'
alias 13Q='~/Dropbox/1600_RoutineDRAMAL/_Routine/Beta1.0/my13.sh'
alias my13='~/Dropbox/1600_RoutineDRAMAL/_Routine/Beta1.0/my13.sh'
alias ducks='du -cks * | sort -rn | head'
alias flashyWindow='flashfocus --opacity 0.6 --default-opacity 0.8 --time 500 '
alias go2myWebsite='cd /home/rahu/0del/_working/suchoudh.github.io'
alias go2ideas='cd /home/rahu/Dropbox/900_myMorningNotes/_draft/ideas'
alias GTDTimer='java -jar /home/rahu/ThinkingClock/ThinkingClock.jar'
alias menu='rofi -show combi -modi windowcd -theme Monokai'
#alias myPomo='pomodoro 20 7 --notif --alarm=True --timer --repeat=10'
alias myPomo='pomodoro 20 20 --alarm=True --timer --repeat=10' # no notification both same 
alias randomPics='watch -n 30 feh --randomize --bg-max $BGPics'
alias reminder='watch -n 40 notify-send -t 4000 "$REMINDER" -u critical'
alias shut='shutdown now'
alias TW='cd $NOW1'
export REMINDER="Create Your_body_of_Work"
export WeekNum=`date +%V`
alias 52='cd ~/Dropbox/700*/43F/2020/' # 43F or 52W  
alias 100='cd ~/Dropbox/100_admin'
alias 200='cd ~/Dropbox/200_Travel'
alias 300='cd ~/Dropbox/300_1350'
alias 400='cd ~/Dropbox/400_Apps' # What is this 
alias 500='cd ~/Dropbox/500_working' # Merge with 700GTD
alias 600='cd ~/Dropbox/600_Music'
alias 700='cd ~/Dropbox/700_GTD'
alias 701='cd ~/Dropbox/700*/701*' # Ham radio 
alias 702='cd ~/Dropbox/700*/702*' # Open Source 
alias 703='cd ~/Dropbox/700*/703*' # ChildGrowth MOnitor
alias 704='cd ~/Dropbox/700*/704*' # hyd
alias 705='cd ~/Dropbox/700*/705*' # GetUpAgainArtist
alias 706='cd ~/Dropbox/700*/706*' # OneLife
alias 707='cd ~/Dropbox/700*/707*' # Coursera
alias 708='cd ~/Dropbox/700*/708*' # Haselfre
alias 709='cd ~/Dropbox/700*/709_Someday' # Someday 
alias 800='cd ~/Dropbox/800_GTD_Archive*'
alias 900='cd ~/Dropbox/900_myMorningNotes'
alias 1000='cd ~/Dropbox/1000_H*' # H -> Productivity,politics,indoreVisits,DhruvaPreeti,Reimbursements,SpiritualDestiny,ToBuy,RnE,Financial, Body of Personality 
alias 1100='cd ~/Dropbox/1100_L*' # L -> Archive,ARS,GovNews,ITNews,Alkapuri,Sangamnagar,Bought,BDA,VegNonVegjokes,Hinduism,AudioTech,EventsofChoudhary,DhruvaMedical,ArtNews 
alias 1101='cd ~/Dropbox/1101*' # Empty 
alias 1102='cd ~/Dropbox/1102_*' # Gov news 
alias 1103='cd ~/Dropbox/1103_IT*' # IT news 
alias 1104='cd ~/Dropbox/1104*' # Alkapuri 
alias 1105='cd ~/Dropbox/1105*' # Sangam Nagar
alias 1106='cd ~/Dropbox/1106*' # Bought 
alias 1107='cd ~/Dropbox/1107*' # BDA 
alias 1108='cd ~/Dropbox/1108*' # VegNonVegJokes 
alias 1109='cd ~/Dropbox/1109*' #  
alias 1110='cd ~/Dropbox/1110*' #  AudioTech
alias 1111='cd ~/Dropbox/1111*' # Events of Choudhary Fam  
alias 1112='cd ~/Dropbox/1112*' # DhruvaMedical
alias 1113='cd ~/Dropbox/1113*' # ArtNews 
alias 1200='cd ~/Dropbox/1200_MyFamily'
alias 1300='cd ~/Dropbox/1300_inspirationChart'
alias 1400='cd ~/Dropbox/1400_MM' # MindMaps 
alias 1500='cd ~/Dropbox/1500_GapsInUnderstanding'
alias 1600='cd ~/Dropbox/1600_RoutineDRAMAL'
alias 1700='cd ~/Dropbox/1700_food'
alias 1800='cd ~/Dropbox/1800_weight80KG'
alias 1900='cd ~/Dropbox/1900_ParisStay6Months'
alias 1920='echo "Hi Dhruva Hi hi hi hi "'
alias 2000='cd ~/Dropbox/2000_*'
alias 2100='cd ~/Dropbox/2100_GTD_Phone' # Contacts etc 
alias 2200='cd ~/Dropbox/2200Parachute' # Parachute 
alias 2201='cd ~/Dropbox/2200Parachute/2201ArtofSunil' 
alias 2250='cd ~/Dropbox/2250*' # job search in 2020  
alias 2227='cd ~/Dropbox/2200Parachute/2227_dataSc*'
alias 2228='cd ~/Dropbox/2200Parachute/2228_Manager'
alias 2229='cd ~/Dropbox/2200Parachute/2229_Developer'
alias 2230='cd ~/Dropbox/2200Parachute/2230_Maverick'
alias 2231='cd ~/Dropbox/2200Parachute/2231_Teacher'
alias 2232='cd ~/Dropbox/2200Parachute/2232OracleA*'
alias 2233='cd ~/Dropbox/2200Parachute/2233_OpenSour*'
alias 2235='cd ~/Dropbox/2200Parachute/2235DoWhatsNeeded'
alias 2236='cd ~/Dropbox/2200Parachute/2236_IP_Patents'
alias 2237='cd /home/rahu/Dropbox/2200Parachute/2237_AWS_ExamCert'
alias 2300='cd ~/Dropbox/2300_ScubaDiving'
alias 2400='cd ~/Dropbox/2400_Link*' # GTD reference 
alias 2500='cd ~/Dropbox/2500_Cmpttn_Crtfct_Smnr'
alias 2600='cd ~/Dropbox/2600_legal'
alias 2700='cd ~/Dropbox/2700_JavaDeveloperCertification'
alias 2800='cd ~/Dropbox/2800_OracleCloudCertification'
alias 2900='cd ~/Dropbox/2900_vehicles'
alias 3000='cd ~/Dropbox/3000_GovtITProjects'
alias 3100='cd ~/Dropbox/3100_Pooja'
alias 3200='cd ~/Dropbox/3200_Covid/Covid'
alias 3300='cd ~/Dropbox/3300_Link*' # Dhruva Education 
alias 100000='cd ~/Dropbox/100000_Done'

# Cat the contents of 7Rules for week  all which are not comments.
cat /home/rahu/Dropbox/100_admin/7Rules4Week.txt  | grep -v '#'


cd /home/rahu/Dropbox 

PS1='\[\033[1;36m\]\u\[\033[1;31m\]@\[\033[1;32m\]\h:\[\033[1;35m\]\w\[\033[1;31m\]\$\[\033[0m\] '

if [ -n "$RANGER_LEVEL" ]; then export PS1="[ranger]$PS1"; fi

# creates a 3 months show with week number 
ncal -w -3

# move command with just one filename 

function mv() {
  if [ "$#" -ne 1 ]; then
    command mv "$@"
    return
  fi
  if [ ! -f "$1" ]; then
    command file "$@"
    return
  fi

  read -ei "$1" newfilename
  mv -v "$1" "$newfilename"
}

# Something else.. 
