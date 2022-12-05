#if status is-interactive
# Commands to run in interactive sessions can go here

neofetch

set fish_greeting

export EDITOR="lvim"

set -x LSCOLORS Exfxcxdxbxegedabagacad
    
set -x LC_ALL en_US.UTF-8
set -x LANG en_US.UTF-8

starship init fish | source


export PATH="$HOME/.cargo/bin:$PATH"

export PATH="$HOME/.emacs.d/bin:$PATH"

zoxide init fish | source

# lf

bind \co 'set old_tty (stty -g); stty sane; lfcd; stty $old_tty; commandline -f repaint'


# NNN
export NNN_TMPFILE='/tmp/.lastd'

export NNN_FCOLORS='0000E6310000000000000000'
# export NNN_FIFO='/tmp/nnn.fifo'

set -x NNN_OPENER /Users/axelholmgren/.config/nnn/plugins/nuke
set -x NNN_PLUG 'p:preview-tui'
set -x NNN_FIFO /tmp/nnn.fifo
# set -x TERMINAL (which tmux)


function n --wraps nnn --description 'support nnn quit and change directory'
    # Block nesting of nnn in subshells
    if test -n "$NNNLVL"
        if [ (expr $NNNLVL + 0) -ge 1 ]
            echo "nnn is already running"
            return
        end
    end

    # The behaviour is set to cd on quit (nnn checks if NNN_TMPFILE is set)
    # If NNN_TMPFILE is set to a custom path, it must be exported for nnn to
    # see. To cd on quit only on ^G, remove the "-x" from both lines below,
    # without changing the paths.
    if test -n "$XDG_CONFIG_HOME"
        set -x NNN_TMPFILE "$XDG_CONFIG_HOME/nnn/.lastd"
    else
        set -x NNN_TMPFILE "$HOME/.config/nnn/.lastd"
    end

    # Unmask ^Q (, ^V etc.) (if required, see `stty -a`) to Quit nnn
    # stty start undef
    # stty stop undef
    # stty lwrap undef
    # stty lnext undef

    # The command function allows one to alias this function to `nnn` without
    # making an infinitely recursive alias
    command nnn $argv

    if test -e $NNN_TMPFILE
        source $NNN_TMPFILE
        rm $NNN_TMPFILE
    end
end

# $SPLIT "v"
#end

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
eval /opt/anaconda3/bin/conda "shell.fish" "hook" $argv | source
# <<< conda initialize <<<


source /opt/homebrew/opt/asdf/libexec/asdf.fish

# alias emacs="emacs -nw"

export FZF_DEFAULT_COMMAND='find .'
export FZF_CTRL_T_COMMAND='find .'
export FZF_ALT_C_COMMAND='find .'


# pnpm
set -gx PNPM_HOME "/Users/axelholmgren/Library/pnpm"
set -gx PATH "$PNPM_HOME" $PATH
#To start using pnpm, run:
#source /Users/axelholmgren/.config/fish/config.fish
# pnpm end

# Git alias dotfiles
alias config='/usr/bin/git --git-dir=/Users/axelholmgren/.cfg/ --work-tree=/Users/axelholmgren'
