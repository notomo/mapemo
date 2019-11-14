scriptencoding utf-8

function! s:to_json() abort
    let lines = getbufline(bufnr('%'), 1, '$')

    let places = []
    let place = {}
    for line in lines
        if line =~# '^##'
            if !empty(place)
                call add(places, place)
            endif
            let place = {}
            let place.name = matchstr(line, '^## \[\zs.*\ze\]')
            continue
        endif

        if line =~# '^- 東京都'
            let place.address = matchstr(line, '- \zs.*\ze')
        endif
    endfor
    if !empty(place)
        call add(places, place)
    endif

    return json_encode(places)
endfunction

nnoremap F :<C-u>echomsg <SID>to_json()<CR>
