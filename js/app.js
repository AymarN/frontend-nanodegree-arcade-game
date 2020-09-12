

 /**
 * App engine needed to run the game
 * @author (Aymar N.) 
 * @version (17.03.2020) Version 1
 * Missing collectables
 * Player selection is not Object Oriented. Canvas attributes and methods were not used for this additional functionality.
 */

var allEnemies = [];
// Enemies our player must avoid
var Enemy = function([x,y],[Max,Min]) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
	Enemy_pos = [this.x,this.y];
	this.canvas = document.getElementById("myCanvas");
	this.cWidth = this.canvas.width;
	this.cHeight = this.canvas.height;
    this.speed = [(Math.floor(Math.random() *(Max - Min + 1) + Max)), (Math.floor(Math.random() *(Max - Min + 1) + Max))];
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 0 && this.x <=(this.cWidth-85)){
        this.x+= this.speed[0]*dt; 
    }
    else if (this.x >=(this.cWidth-85)){
        //this.spawn(left);
        this.x = -(Math.floor(Math.random() *(240 - 120 + 1) + 120))*dt; 
    }
    else if (this.x <= 0){
        //this.spawn(right);
        this.x = (Math.floor(Math.random() *(240 - 120 + 1) + 120))*dt; 
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    var sprite = new Image();
    var imgWidth = sprite.width;
    sprite.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAACrCAYAAAB/nlILAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAxDUlEQVR4Xu2dd3hU15blCco551zKOeeIQIACKCBERuRgojE5Z7BNztgm2oANJgdjhMk5J2Mc3oTXM9P9Xs8f093zb+1Z66quKApJCNvM83t96/vWV6VKVO3fWXvvc+65Rbt22kWLgBYBLQJaBLQIaBHQIqBFQIuAFgEtAloEtAhoEdAioEVAi4AWAS0CWgS0CGgR0CKgRUCLgBYBLQJaBLQIaBHQIqBFQIuAFgEtAloEtAhoEdAioEVAi4AWAS0CWgS0CGgR0CKgRUCLgBYBLQJaBLQIaBHQIqBFQIuAFgEtAloEtAhoEdAioEVAi4AWAS0CWgS0CGgR0CKgRUCLgBYBLQJaBLQIaBHQIqBFQIuAFgEtAloEtAhoEdAioEVAi4AWAS0CWgS0CGgR0CKgRUCLgBYBLQJaBLQIaBHQIqBFQIuAFgEtAloEtAhoEdAioEVAi4AWAS0CWgS0CGgR0CKgReBvG4FugYFZ3YKDa9ui7r6+fn/bT/sP9K8z8KUhIau7h4QcpKp1AX8eovOSodCUMGeZHWYvcwyaG24v8wyaj+sFEQ6KFkITw91lZJjXK+od6n9DfV/1ultIyPv8N/+BQvjbvwpHNAPTT+f758EI/Cidm8wLtZE1YR3168I76leFm8lqaEuig2xPcpQDBf5yuGuYHC+Pfk1ncN+F8tjXdAL3H+sWJl8X+Ss6bKRtOYGyIMFHxoR7KRoc5iccFHTjb/92f0fvoLqhTucrIwFhVqitLAq3loWRtrI2wUl2pLnJ4U4hcrZ7rJwuiXlF18vi5UF5ovxQkfK76AXe5yHe72p5vDR0CpKTRQGyLdNXFsZ6yNhwb6n/R4ZEEN11uhsD4YbhADFTZy3rYmxkS7afbMwMkh354bKrMEr2Qo/LkpWA3ytNlItd41/Rg9Kk3wWGMVSCMdaPvXLkl8Fd5e7gYrlYmyY7S2JlMSCNA6TeoQF//rtPd12Dg3tX6fxvDAtxU9ywIdFR9uX5y2XDiD9fEi8HimJekQqFgXtYltSkx7j9ezmkNSgveqTKz4NK5L9Nq5f/sfID+a+rp8vjucPkct8s+TLPV2ZEugsHGL/b31GCateOo6kq2P/GhBB7+SjRRbYXR8jynDBZnh0uJzrHNQWXAIyhXO6a0GzgmbLuQDeQZr4rj5MLFfFyoQfUMwGCoyqT5FJVkpytTpJTNVSynO6V0qjaVCOlyeneL3UGt8/ADZdrUpt0vTpV7lXCqVRPDIwBRYDURX6p7yZP++RLQ2mUnMh1l5kx3gqcP7xz+AErQwL+PCLYSTamuMrJkpcwCIQ62CnmtcAz4HTPqTIU8JZUHiMnesTKicp4OVmVICcB4CSCfwqBP8XAM8B1VIac6ZMh3/TJlG/6Qv2yGtU/W86+SXjeWTjiLF/Xl+8B1aXLObz35Zo0uV/ZCOxhRZJc7B4pn+I71oYGyh/SNWrNGBTkKuszfOVMSWRTQW5AitpdGK2ILlFHPSGcLYuVY4BgrNegKDDi5GQlQSS+BMERj4CdRuDOGILPoJ+sTZETeN4JOOZkr2Tl728GZMu5+gIjFeJ2oxqargtwm8/Jl3ODoUF58u3A3EYNyGkEqkDLlAaAvwFIV6pT5GCBnwyLCpJ+2dmBf5h0xpa2LshTpqF4Hy4Jb7Y7elKeLNeRepqD0CIUwDhQFCR7crxlZ5anrEv3lg1ZvrI0w0+WZQbI0nRfWZCEWpXiIYtTvWQZHl+OAbEiy08+zPaXD3MC5OPcQFmVFySr84NkTWGwrIXWFYXIegod3kZoW3GIfF4SIl9A+9E+H+gZJ4cr4+RsbaKc658h5/rCKQOypGEIARJYnpwDqHMA9S1AfQtQW/NCpCg+dpO7p/t6a2vLg4Dzt6k3nGOU6nRfDQp0kg9jHeXb7nGyPi9CJqWFyLLsMAVOW0DszfeT9QmOsgLvMS/aUSajRa737ShD/S1kRKCVjAy2ldGh9jITj82JdZaPk11ldaq7rE0HqCyAyvaRTbl+sjk/QPaXBCP96eRkeaic7BEmp3uGy5nKCDkFHSwPlz2lEbK3LEI+L4+UL6B9FZGyuyxStiAVbYO2do/AdYRs7Boha7qEy/auUEmY7MLc6HRVDBySLOeHFMj5YUW4LpTzcFYDXVUdJyGBAZKUkiU5eaUSFZMi7h4+/2RmZvb/b2JKID1YO/yt5LMcf2lA60oY1MTUENlRHClHkZYoOmFfUbDszvOTPdCaeEeZHeUgY3zaywjv9jLAq72859tBxkHTAzvIx5Hm8lm8lexMspVdqQ6yJ91JDmS7yvFCDznTxVsulvnJpYoAudIzSK5Uhci16lC53itcbtRGyM0+kXKrb7Tc7h8jdwbGyZ1B8WhtE+RefaLcG5ok94cmy4Nh0HDUhREpch/Xt4YkN+k2bt8YjHrRLwEA4vXne8fpz9fG6o9XRwNYpKzqEiFbAeoEXHRhSJ5cGFEs3w3vJCvL0yQpOU0Ki7pLWcUQKa0YJoWdqiQhMUvc3DxvwTnvFg6LWm2g+58nBFvLURRypia2mMc6x8pOwDjQLUqB8RVG2PZML1keZSMfBLSXkQAwFABGAcaysI6yKcpMNkOfxpnLvmRL2Q+dzrKRMzl2cjbPQb4tcJZzRW7S0Nldzpd4yXfdfORiqZ9cNAC5CiBXa8IUINd7RwJIlNzqDyAD4uQ2YNwBiLsAcW8Ygj8iVe6PTJMHo9Ll0WhoTIY8HpshT96jMuXJuEx5qgr3PVOF5zzE664PRvodBFh94vVfVeF7VkTLJkA6NyBdLo4pkY+r4JDcAunarVKqakZLz+qR0qNyFAANl/yCcvH1CxRLS/PV76TmEEhff0eZH+0gDWUvW9vr5QlyBCD2FgbJlgxPWRRpo0AYBAh0A6Es1nWQrTHmciDFSk5k2ig6adApwKAaodgDCtJhoYt82wlQunjId10BpbuvXCz3l0s9AuVyJYDAIdcA5BqA3ACQm/2i5dbAWLkNZ9ypTwKQZLmnwgCIBwwwADwenyWPJ2TLk0m58vT9PHn2Qb6i76cahNvPqSnQ5Dx5juc9x/Of43XP8B53hqXK1YFJ6PLiZU9lrDQMTJe1dXlS1KkTQPSV3n3GSq/eY6S61xip6zdHevedK51L6iREFyq2ttZfAczvt1hKIP38bGVqqDUKZbiSqm6VJ8l3mC8cq4iRtSlu8r4/3dBOBgPGFNxeHWkmn8RZyME0azkGANRxA5CWodApplC85YICJUAuIW1drtIpLrmGlHW9Di5ByrrVP1ZuDULKgkPuIA3dHQ53wBn34YoHGPkPx2XJo4k58gQgnk4tkGcziuT72Z3k+dxi+WFeZ/lhfmd5sQDiNf5WhMd+nNVJXswskhfTCuTFlDx5MSlHvgeg60NS5OqgJP3emgRZj7lTdm6G1NT2l34Dxkmffu8pcGr7TJDBQ1fLkOEbAWyMxCWkipWV1T/9LmAIpI+vrYzwN5M5GUEAopM9nWPkG3Qp+0pCZRacMSbATEb7d5SpcMXS0I6yO8lKDqfbyJEMGzlqANImKNm28o0hfTU5RUlfgFJGpwAKnHIFTrlYHS7f9YqQq3SKAqUxbd1Byro3AvMK1SFITQTyGKP/6bRCeYZAf08YC7vIiyUl8mJZV/lxRTf5aWV3+elDCNc/8/bybvLz0q7y86IS+QmwfprTSX4EoB8BlQ66MTxNjvZPlgXIFAWF2QAxSAYOHi/9B42Tvv3fk7q+Y6GJMmTEOhk+artU174vKanZYmFhfuM3pTIW9Rp/V3kvyEI2FIYqDtnQKVJO18TLRrSr40KtZJzOUuaEW+qXRVnK7hRrOQgYhyBjKF8Dzt50B/k0DYU7w06BpbrFOH0xhX3DFJbvhBTmKueKWVM8AQVFXqkpSF89g6Whp06+rQyTbwGmAWAu1qGmsLgbnHIPTrkHpzyAU5i2VCjPphfJMzoEQf5hcYn8iMD/+GGp/LS6VH5ZVya/bCiXP22EeL2uXH5ZhfsB6hcCwvMVOHj9TzMK5fvJuXJ9eLp+BVYTijvnwiWDpX7YRBlUPwFgxje6pi9dM076D1woA+pXSmXNOIlPSBNAYSr7dZdydFlDfDroPysIlO8xYbqOWfTRnjEyK85RhofZyrRoW1mZYCdf5jrKYYzwrxHQrzNtFShfGzllU5qLrE/D5NKg7YDTEpQzcMvZXAc5mOsqpwvd5LxxsYdbLqKunKsIlm97NIJpAJiLtei80HWxyN9mTaFbUKSb3IKU8wij+4mauuYUy3M6BU74cQVc8XGp/Ly2rBHI1gr5L1t7yJ82VShg/rQasIzA/AwwPxPM9EK5MTpTf6B/qnTpmicDBtXL0BGTpH7oRBloANN3QKNjauvGSK+6iVLTe7JU9Bwmnp5+BPP28xkeW+jrby/LUz3kfk2KXOmVJMdQ3GZgif29aHtZhGMcn2Q7y9FiNznayUWOFDjJ4Vx7OZxt9wqUQ3DFOiMgBLMZkFqCsgtt8Oo0d1mDucgadHCf53kqYL6DYy50RxcGMBfgmG8NYBoA5hqg3OwLtwxAsVe7LyWNNdaWhyz0SGOPWVeYxhBQpabQMYu6yI8KHKQwBP9nAFIcQvfwNoHgsV8MqawJCtxyb1y2nK5PlxJA6de/vwwjFLplyARAglsGvqwxNWgA1O6sqLhWrK3tCKbthZ9LJzVhATIy2kOOYTZ+pTZZ9nYLlSkJLjIOE711WS5yCJ3R8a5QCZ7T2U2OFQFMPhxDt2TYvnQKoOxE6jJ2yuf4uyUoqwCEUBQwGR4KmIYiVzmPVKaAQSq7hPnKZaU9DparKPzXUfgb5ypsjeEYpjJ0YkpbjPmI0hKjxhDOIxR9wnmKwv0MBfx71InncA4LPov9j3DQT0xVS7oqUtIW68oC3D/3Zfr6Ca67OxZFf1iank7p069Po1NMoaC+qF1ZVa/RUlmNdrnHcImJzSeUttcXzNZv1Ie7yrzMYDmDBcA9OHo3GrPqCfFOsiHHTU6UestJqruXnOjmKV93RvBQY+Zi+WM52mI6g+nrMAv9G4q9WlPUtninwSkqmD1ZmLPkow0vdAYYN4DxkIvdvOQSXHMZbfIVpLNrKP7XUfxv1IbLTXRkjZPIWEwg4+RuPSaQQzB5hHMewDkPOV/hXIXzFKS1JxOz5RnqwzNAes4iDhf9QLHrMtKPcIbShaFlfoEu7kd0Yg9HZ8i1+hQ9a0rvPnUyBEAGD2H6MhR8pC+lG6sbi9SlOmUUurERkpFVLR6e/gTz/huLi+KSIHcZGmihP4WWbzccMgpAxic4o+vykpMVfnKqh5+crvCV0+U+cgpgPsz1lblYlyKUOWk+MifVR/akIZW1AQrnK8bF/hhq0pcZ9vIVlWkvJ7Ns5dtsGzmH1NiAFHkeqfI7pLMLKpxSXxw99JdrhFMVjMXCMLmJOcxNzGFuI6Vxhn8XzrmLtMbZ/QO45wEAPQSgR6PS5DEc9BiQnsBFT9EUPB2fKc84L8H85Hs46rmibPmBwn0/4LEfkApfjIPr4MCrA5L07L5qamsb05ahA+unAmmau8AlNaOkZ9VIKe85XAqK+kliUmcxM7Ngm9z6pSw05OAALKGsyPCWI6ghU3FM5L14Z9lNID384ZxAHLuAqgLkG8Ip85ZPO/nAVYACMHPSfWQhFgnVDqw1p6jBN+3AzrALM+gsgBCKAibHRhry7eV8oZNcQLq8gLR5EXAuY4J5Bc65Wu6nwLleCThwzs1eYXKrd4TchnvuANBdALqHunMfDrqP9PZwSKI8BKRHWH55jDT3GKCejEyVp4D1FLCo71WNwW1qdJo8x+PP8byHmKRe7hOnz85JR7BrUNSHo+uCO5CyqnsNkarqetxfj+I+WElbPQCkAkDKsBSTm9/H2C0t7wtQWmC4pD7AQr8RHdcUuGN0rJNsKvCUkz0D5GwvtKN1OjkPNdSiAwKYM3AM3fJJgbeszvaSVZkeshs1w7QtVieQvD4AFyxJ81K0FPowzaNpVq/M7FuAQtd8mekgX2WhO8t2km/QOl8ocpaLxa5yuYs74Hg2wkHNuYaacx2TzRtwz61qndwCoNtIb3cA6S7Wye4B0n0szTwYECMPBsXKw8FxULw8Qrp7PCRBngDYEwB7isBTzwCuUUny/dBERQ/gwEs1Ufq09BQpK69EsKsR9D5SWtYLHVmFdO5SLp06l2HGXwpndMOyS1f8XYPH+ktWTm9FhtrC1eXmL9zJURfkKMOCrfRLM7xkSJSjrMx2l+NwyDcAcr5vGA7+hMnRXjr5ro8OK6SBcAvSWClqC0bscRZ7tMbsuEzbYuNJ5AbUHGMoBPNFhoOy1NIcFNUt+/Cc3ZlOivZABwDofK6tXMizl4sFjnIJqe0y3HMZn+Uq3HOt1Eeul/nK9Qp/uQEH3awMkttYN7sDSHd6hcpdQLrXG6qLkPsA9QCgHvajouURXPUYrnqM5ZsnFMA9pXCbejYwRu7DgRd6hOoTEuPRgVVIl5JyBUQxQRSXYmGyOyaW3SQPMHLySiQ7p4tkZhdjATMPq8pdFSisLYZOrHko5aGhSF3m+hE6a/2wCHuZnOgsX2Ix8BRS1kmAWFsSILPyfGQWivpyOOMQcjlT2CkFintjBwYoB98A5W2d0ioUpLTvoAsUAF1EersEQJcB6AoAXcXnugYHXUdzcB2QbgLSLaS5W3DS7Z6Bcgeg7lYHy73qELlXo5P7gPUAeliLQxAA9ogCtEd9IuQxhdtPoKd14XhdqJzvHqiPio5WAHClmBDoiLx8A4jcLpKV3RnBL5b0jE6Sll4k0TEZEhWdrig+oVAt+M2nsKqwoBuDUOCHY//VIGxs29nJU44i8Gd6hcjmbgEyG5sH5hb6yexcH5mBNPUx5hCN6ctTTiB9HEUq4Vzlq3Rr+SzJGkvw1rIr2VqZ6Zsut+zFqKc+h1jQ1e5LdYtaU3itQmH62pvpqDjlC1xzonkeMCgFigLGRi4SDnQp304uF9jLlSJHuQpI1zq7ynV8zhto5W8A1C2k3dsAdbvMB/sAfOUOmpi7yAr3egTIfQC7D2APqoLkIQVwjwx6jGvqDtbjzhX76EN0YVj/6qI4ISuns+IGQsjIBISMIklNL5SUtAJJTsmX2LjMJiAqmNCwRHZhzaewXjofGRxkqe+vs5XF6ZiLwCXH8AHP9tbJ9GxvmYPDn4RCp0zHHGIKDjqxAzuJtphzlaPojj5LtZEVMZayINIS+7ksZRGWX5ZAq+IsZQ/gNLcGZlroleWWloq9WvANMFQoL91iBAVgLuc16opBV3F9DW66DlA3OjnJzc4ucrPETW7BUbcB63Y3D7mD73MXwO6i7b+PRuY+oD2g8F0fAN5D6BFu30KKPJvnpvfD8nwaAs/gp6YZAKTmAwLSFFJVYlIuHJH9GgwVCq9tbOxf78IWtGvXoTbUR+pRT+p0drKrk4ccQtE8zgIPKFu6BzamLmhGlpdMxca5lTnuSF3eygTyKIrtZrTB8yItZH6ExWtQlkQDDrQ10eqNq8WtFftzbYDSkIM6A11qBgrhXDPS9XxbuWHQTVzfhLNuFdrLbQC7U+ys6F6xi9wDvPuARz3o2qgbSNdnMuz17u7eOKiVoyg+IUfi4rPgCCrzlVRlDMH0tr29M93y6qVHaKhS5HsHWMt0LKXs6+ypQDkGKN/UhsipujCZge5qOoBMy3CXKdjNsQVHBBWXICUcQepaGGsj8wDkFShwC52iQuH1m5bwWXPUdvlwJpbzjdtiAxS2x6pLeE2nENgppLTTWOqhvsFt1SmvucUA5jUoAHPLoNsFdkLdge5ShXZyz6D7uL6caSWnEs31DGhrAW/LY4aJ5KtHKaujdHV9gpykh7+1rEDqIpSDgHIUncupGrS/aINP1upkL/Lonm5+sg+pjbN6uuQIXLIziwfALBUo1AI4Rklf0GITKHuRxlo62HUIEIyXWrg8YwxFna8ocxYjMIRypglKI5gzEIt/symsLVAApzUop5PMfzcovn6hdMqrxV6FUuaL4lzgJl8Ue2J+4iGH0fMzhZ2uDpIzNUHYRIBODMXwBHLsMRTLo5hdf40jhbuz7GWuAciboOxPfQnFdA2MyyzGULjcciTLrmkC2RqUBhMoZ+GUS4aa8jZOYRqjW263AuW7dCs5CZf8Xk5pEUpVgKMMCLaRjxCYbn7WUhpoI3XYTXIELeRxOOYEYBznbXQsR9FiHsGi5NdYLDyISdx+LI/QHapT5hucQrcYO4VNQGvFnsssxlC2YEWZTjGd2TfnFHZfTGV0EOsKa8rbQGFtUerKG6BcycagSjDXnwAUgvk90pcByqvrYNXhurqKIA8ZE2Yj46PsFCjd/W2kDGC2wDFHAEIRVmmPwCFfA8ghbG44mO+MHSf28jlG/6c44qi65TUohhS2D897UwdmvP7V0nKLKZQW2+I2pK+W6oqxU27CcefgjrOpGFQE8m6gvNoWV4QG9y4L9sE+K2zGznCSrr5WgGItg8Pt5KsuKPo4LHsIS+eHUGvWZLrI/CQH+QR15EAO5hppNgqUfTgevwNgPo5BsYdT1LaYTlkfbykqkDdBaW2uoqSvNnRgTXOV3wClARBOpVjK0QRzORJvrqcIhDr+llACg6KEaqnoG5zyKpQyLLF0D/SWkSFWCDY22aU6ypIUJ/kkz032oz0+UOyh3B4TaSdjImxxoo2NAnB8qKWwcBPKF4CyHzoAcQLJQ8O/dgn/t7bFrUFpri2+kGUtDeimTsMJRxPN5as4MzkUZ6b/GiAoFQoAvYSC229KX76+OnUZhYVcmOo4WTSFY4Dy6lYkrnv1DPTCzkRz2cbj6Vjw25nrInvyXeXzAlf5AsV/aqy9jAKMUUhxI3F8fmSIpQzH85ej69prCgVgWoKyG1uNNsI5y/C6tZhUfo6/TZfwW4LCxUoWfi5MnkAhp3PedgJJKGczGgEcSbKQLwFgX6yZ7IcOQPybUCgVymEDGFMoH2EfW3M1hYG3srZVQJjKxcWrJSivL7WUB3hKL88O+rVJdrIdyx+fIT3tzMECYA6OpeQ6y7gIGxkBd4zQWcnwYEsZBiCEwgKvQIFUp3xpgNLcEj6L/VIAIRTqI/zdVih7M7DMgvSqLkwqi5KGAt80q8ffqlPOA9pppKHjALA/3lx2R5vJ7hgz2QPthT6HvgCIlqAcwmuolqBMD2oeCgNPGKdPn5a//vWv4u3t3QTHxsqx7VBwxFGq3NrpB/h0lPXJ9vKJCgZL5Tvx5ZfE22IFGTCwu2UoYKhQPkEdUaGwrjB9NUKxbnYJfzXcYQxlHf5uCxS6RAFiBIVrYCqUUwj+l4kWsg9B3I868Al2YX5GAcQOaCe0q41QVLccZBrD+8ExSl0xdUpLUFR3mEKJDM7FgS3z16AYZvSvH7PnmbOVgNLbq6N+aIA5Zui28hm+9A6KgNLtZCK2FA3BYyoUBpdrWq1BMd7ZwoVJFvwNSF9MYdSX+LstUNgWH8LiJaFsR83bmuIg2+Kw9xijfUtkR9kKbYO2Q59EUW8PhSmMQJqDArfIEcBuKvSoKW+CQoekpqYqLrG2chBCaS59tbh8zx0sVR7m0sfHTM8l/HqsGA/DAuU8nKO4LtlOdqTbY8ERoJJtIKwCQ7sARIWidmCqU1jsWzuuYrrcYroweRyv/wr7jKk98RayI9ZccOawrIc2RHSUjdAmaDNkDIVgVCifvqVT2gKF3ZjaFrcExd7BpQlEgFesAoPi/aZFnl0ZoDW/35jFvsrXXgYEWOrrg6z0w0Ks9CNxbGW0zko/GrdHh1joZ0dayawwC5xQaiZLI8xkVbSFrEELvA5aH8t1L3N5P8RMpkBTdeY4d8VcNsRays4ES9mViA17Bu3B9d4kFHmIm703I62sDu8gH4Z2kI+wy/JjCkV0tUE4lVvWAkZrUAiGQBS3GJyiQIHelL5YVwhEKfZvcAqhUJyrtASFhd6QkhQ4TFlc32quJTasELe43ahjZQhXinGQK9RGPzrcVj82wlY/DhoPjQmzltHouMYFW+jHBprpsYteP9qnnX6sb3v9IM920sW5nZS4tJOuUHeo1LWdlLu2lx5u7aXWvb0sDO4gi0I6yGJoCbQUG7+XQcuhFdBKAFGhLA+3kBVQi1AAyNQpr6Sw1qAY6goLfbPFvhkohmLPgq8AoThXmdZCoW/LIqRRu9zixrz2IGpRGuR/a3iorX5UhJ1+XLS9fmKMg35yrIN+gM5GSn0tpdTHQvoFWMoEnaV+HMAQygjvdtINQDqbQgEYQqkAlJ7Qe77tX4UCMMZQCGZFqBlOEnKSGTEuMjO2USsB5zWnvEsoJm2x2oGx2Kt1hVA+j8bqh59lsy2xKZSY2Gws5efhmHy2Mk8x1BCevxLQ2laWDnjQGhu6N9aHO2MXpIN+YpyjfkqCk34qVBVkIxVY1q/ATpdKfJD3I6z1kxQwHfU1bu2k2Kl5KGVGUCoBZk4QTo1QnWKAQjAKEGhhhJUCxBjKgij7FqHQLawpxnVlM3b8b4Q2RZnLVogpTE1f7MB+bVtsDOVLpOSN4S5vgJKJ3fadJDmtSlIzaiU5tUJ0oUncVvQ/EethkD1k3hqUjnjQNsvbu2v/SB8ZH+uofz/RWT8t2UU/M8VVPyrGUSqDbKUn1sJGhGMfcYyt/gOAmayz0Fd5dHgJBW5h+urG9AWVIYXRKUxhhDI9sHUoy1FLTKE05xQWewIxTWGbUE824IywjRChbI6ykG24ZltMIG/TFqsTSOO2WHXKtkjHVqHExhdKWmYfySmcAI2XtKw+4ucfw/pyGsqAPCEnyKolKExdJGYHuVVGhN6dEAeHJAFIqpt+brq7fl6Gu34SthxNxC7J2UlO+pnxDvrp0QATjoYALbLqFLWuNAelv+er6Yt1hS4xrSvL0EgsDcdcJgKTS4h1xTR9tQSFdcUYyiZAUVrj32muQigH4JINcAmdsiDY6pX0FR2TKYnJ3SUzd6jkF8+Q3KJJ+Lsnui4PApkKRUJBkDfkDNlAjP9rF6WeQA6Qe0FAwMKRCb4yFQ6ZDSALsz31i3OgLA/9ogw3/YJUF/2cREf9rDg7/bQoa/0HYZb6Hu4dlJrSHJRyg1N4/goLPUUgLRf7jo0dGGCsMum+2IERyJpwc1mLTq+5tphgNiF9bVbS1+87V9mP1YdN4di+CyDUgVhrpT401pAMSUgqgUPqJCNnMFJWbwkLz8A5KTbPENcKKBGKgkIgH8gVsoVYOpqFYmmA4oFr/+qI4P81DVDmZHjoF+d66Zfn++iX53npl2QDTLqbfl6Ks35OgoN+JtLYNKSxCcHmSFOvQmEHxvRFKMNwqt0CdF9v04E11xavAowlOLSwlIq2w3mVtq/MVX5LW6wutTQ3V/kCMD7Dv7k+DKd1GICoUJwsLZUVYBbx+MRiRTEo6p5egXTHdqgI4qHeJCjaAMXXAIXZiaXjzVDy/P2XjU32l9npjVBWFvrqVxYATK6nfkkm3AO3zE1qdMv0SLgFq8WTAzvKWN92ANAO5zu2w4mn7WQMOq7ZOPN3blCHJijT4Ri00QqoCX7tZRbqTHNtcXNQlkdav4SCIC0DGDpGLfRv0xar619sizlPMV4D+wIT1V3RWDHHLyxtCneQtYCxjkAMMnZKqpfX/+E8RF39JSD8/b8R5WlQNyMoyQYoOlwbQzFrExQ8Kaw6Mvifp6Vhvxd23y/MDZLFecGyBHu+CGVRmqt+XrKTfna8vX5yBBYpuR7m11FG4gzgyTjnkec9TkPwZyDgswxQ5sMp89B9DeHZwhChUDxr2BTKh0YTSOMU9opTAKU5pzQtt7zFXGUHjvl8FmUlW3BYYn2Yg6wKdZHV0BqDCIVSoahu2RJjL3Hu7izeG6EH0F3oDDQG6mkC5a2d0lRTmL6g0Dg3t34DY4JkemqgzM4IwSZuKlhmpwXJ7BQfmZnoIe9jTtEv0FL6+JlLb++OUuPRXobDJU1QAMYYCtPXcBMo78EtKhS2xZxAEkpLdYVgqNVwCF2iLrWYLre0NKvfgrZ7K1YmNmPVex1+be9jHY4f6Vzw77lgJaFRLUFpcgtSGDsw/i6Yo4XFh4jXB9B4aAQ0COKEkFC6QoVQJpQItbmm0D1N3ZfBWrRYdGFAwN7RMdhalBIkMwFjFjQTkGYkB8jUeD8ZEeYpNX7O0tPbSSo87FE/rKW/h4VM8DUHGPxogQHKHKSv+RCh8L7xSF8U0xfdYzxXaZzZtwylaanFqC1W5yobsfSzNswSI9wagbaDGPRGrQhxkmUhLopWUACx0qC3gbIHv5KxJxYH+8J9JNbd/RvEaRbE4+vvQZx/DIB6QSzuJVA+xDY4AWqu+2L8m70o8xTIBWJnEEyq/ra2JRW6oH+ZlIANeEn+Mi05UKYlAUiCn0yJ85XJUd5S608ojgqUUlf8lIengwz3csT59I4yGhrrg5/4wCnfU3jatz/mOAZNx/WMAFuZCc2CZvM62F6mo7uZgQksNSfEATDtZAG0kAq2k0XQYmhhEDb/BTkrmg8toIKx/wxaBC1ukossDYYMQAhleRuhqCnsCxzKOIlV6sPYCrsYk9vKEL9/Qy25iRjNh2ZAkyCmrCFQP6gaKoOKoVwoDYqDwiH+wM4b5ymkpMzoISfDC/hCvkG8r41NWXWo/1+mYp4yN9Vf0cwkP5z/6CsTIrxkXBg2XAS7yUh/F9QIJxkGIKZQxvk6wRlOMhGa7Neo9w2a4u8kHxg0Ee81IdJLJkZ6K5oMJ84McAa0Rs0ObNRcVe8Iymak5T34/cqj2F3TkG8h+7GPeUKUl2T7+r7QOTkdQ1yWQQuhOZCaukbiNlNXHVQJqUU+G7dZ5GOgUIiLj+7QG2f06lyFT+QL+EKmML5Rso+NTY/eYT5/WZjm8ZclGT6yGCcILU7zxQYKH5kS6SmjA11lBNLYUDhjqBGUUfh7DJzyXjNQVDC/BsqcNkB56RYXWdKKU9ZHOslWnMv5GSAcwOGJk3nYy5yHwwU4d3MZTpiqDA2W7LAYcbZzZItLIMuhxZCpS4bivv4QU1c51AUyTV3MQJw4MiO1OEfBY00XpjDOMDnT5AuDoAgoHkrztrauLtcF/mVavCvO1vKU+ck4gyvRS+bGYTRHu8t4fPEhANIEBbebgzLJxC3GUKYg2BPDPeESuAW/gjo1COtgRk5R3dIaFKYwAnkNCj6fWlM2wgk7CAHn9R/HMftT+ThsnItNE2nmsgI/6jMIBRxd1b/Eh0RJZFSaIsNS/BHEYgm0AGItmQKNg9QC35xLUvB4LBQGsYniXNAR4tzwjZdXZvZ4tuoWTnjYznECVFgUEHBpeJSnzEU6mx3nIbNioCg3mRGBAKIOTMT21/fwOy4jjaH4vExfrUGZijQ2LcAJzQCFumKQmr5egwKIpjXFtK4s1znLWrhhW7wDNg3ilHL8MM/hXPzIAmtEhqUcTDKTeVE4aw2/Z0xXxPsHi62ZWQO+6x7MN/5DF5pgDGUX7lfTFpdNJkCjoHqoL6TWks64nQelQ2qBf2uXqMTU2kK3eEFqbWGRSoVyoKI0b+9tlcG+Mgq/FTkj0kEBMs1QnGdGAhY0F5qOdnMKfsLwffw2GOvKBOg1KKgtak1pCYppXWlyCqAsRFe1MgJtrUFrcOLs1gSe+2KP81jsZR90ADtgvsLulyO51jil3EI2JdjKJPywNPclZPn6SowupskRPtgWhO94FtoAfQow/06X4PrfjIBwYjgRGg0Zpy214yrA/WyD1bkJS4FaS7icxSlImy/Gi5Ncm1E7MbZyTGMkzxFQ7GFlNRAt89XeAa4yOsACP6iDTircUVQocwBlPkbgAmgh0sXiGCccmYTQXc0GrBmANROagd3+xlBeggFUg1MIZQFbWrx+NfL/GmgttDWZPy+C/QMQz9ffBe1GXdgLIAewH+BLbLY4hP1cq5IALs4BLbyX5Pv7/2uGj89/j3R1vYfvsRc6iID/X9URBiicEK6BPoJWQEtbAcIWmNuDekDGxd04bXFwc5BzsLOhana9qzVKBKOuhbHoc0mAi2ic+CQagaFFS0McHacX+PvjnE9fbKiwxyFg/F5LhB3OVcEv3hlBWQQoS6Bl0PI4J1kBrYQ+QhpcjVP51uAkpHX45bsNOBd/E37UYDN+/W4LTr3YkukpW3H6xdZ0nH6R6owNE46yDdoOfYIfayOUHTg3Zk+6LfYNWMl2HJbeGd8Rp184yPgwN+mJlJQRHis+dnb/amdmdhSf+QtoD7QL2gF9An0O/ezh4a/u11qFvzkpZFFXa8hs3GanZeyQ5oAwmzCrcBCzJgdBanHnWlezyyqtAVEfI0mu9bMgsTCp9UUFw8mQ4hiCgSpdLS3HIBWcZkqoBqAxwQ4yL8xcPx+/S7wISyJLYrBNyQjKykRXbOb2kvX4zcfNBfhNx84R8il+vXtnRaLsqUpRtLtHguwqjcYPN4fLDvzK3qc4xW8bfttlS6KdbMT+gOVY+1qI9+Vv4fM38YeFeinKD42UlIgESYhINK4Hl/A5dxtAfIprLhZuhTZDTFVroRMQoanuWITb86CZEIs6Z+2sIZyPqJ2WsUMIhHMSFQjriLoiTCCtHtRqKxhaTQXDzoG50dQxBEPbclmBNu4f5eq6CYuad/P8/O73AqDhLP6Y/M0IMpelYWayGMdMlvC4CbQMh3vVY/I8oPUhTqn4CBv8PsaO/VXQAvxw6DTs/p8OzYD4HxNQVbpAKcEPnBGACkHtlNRrpiRD1/QnfC5TEFyvWm+AQWeoqYpzELa8CyC6gwV9EjQWYpc1GGJRr4FYQ7iUwpVgzkeMHWIMhFONt6ojrQFSC7+xY9RUxq6Co0Ip/oYPxw/JDqQPxIkUlx3GRLi4fBbu7Lw73dv7co6f3xOurCZ5ekqar39TUNXgml5zjsBRr8o08M39zTRkgPHP+PfZxm6BNkHGILit52NITVOsG8YwWMwnQ2x5VXcwXXFdqxLijJ1zERZ1dqasIWyI1JSlOoRAWA6aPZjVWvBbe0xNZcpBMIg1hqOA/zg/BD8MPxQ/nFJnINU1XHLgyBoOcRmCLSTTAJcmGIxrkJLHWWCptgTd+Dl0A19HEFxCx/v9B3QFYkqiE9ZBayEWbjpCBcEURVewZrDN5WSQcw9jGOyuOLAGQhxoqjuYGTpBTOFM5eyyONHmXIRFnTWEjRJTFh3yuwLB+ykXgiFtUuc/xn+U/zg/BD9MIsTOTHUNF+I4kiohpjRTOMzNHIVMDczX26AvIZ4O8L1Bz3HNIDenf8f9LwxiF8VaQO2H6AA1+ExJhL8SUiGojlBBMEVxkLCIT4K4sEhnsNUlDKYqztI50DjgOPA4AI3TFVM6UztTPNe12GVxxs6i/k6A4H2Vi9ou8x/jP6o2AExnqmu4xsP+nCOII4n5lksOlRDh8AsyrfELc62IeZruISAGhcFhkOZCCyAWWqYUjmYGk+LoZlfUmvgcPpev4+v5PioEvjcdMR2iaydBHCR0MmsGi7ixM1jICYOpqhDiwOMATIQ4ILlGGAQxXTGTMNX/qrYXr/vVl454JTszpjPVNdy/xMU2jhh2HkxpKhzWGzqHX4xfkCmAyxHsXpjaCIjBYFCYv9lyqpCYSgiKQeTiHwPKboiphlpgIt7Hx/k8ioD5Wr4HXUkIfG8OBDqC6YmpVQXBQcPBUwWxPnaH6IxCSIXBVMVlEw5EDkh2pnQH17PeabrC+7d6UV3DtTIniCOEI4UpzRgOncOcyy/EL8YvyHxM9zAdEBALJ4PB0VkPqZCYQgiKweNIJqxJEIP6PsQAm4r3U3wOn8vg87V8D74X31OFwAHBws1aQRBsUFRX0OF0OhcUmaboDBUGJ9JMVRyIau3gAOVAZZr/m1/4IVjImNKcIGM4/OD8AmwG+IXYqbEhYGorhAiIX561h8Hg6FQhMVB0EkExePUQYbHoMqh0FtOfqXg/xefwuXQAX8uUSQCsbcYQKvG36gi6uRhiveAgotPZ4rLLVNMUncG6QRhuEFMVB+Y7rx34N976YgqHH5gfnF+AX4R5lwubTG0qIH5pHgBiEDgqmbMJiWmOTiKoSogjmIWWo5muYupjYOkuU/F+is/hc/kagiZwvhffk+/NtEQIHBhMr3QEQdDVBJEIMUVxUNH5QZCappiy6Yw/LAx8tlcuhGNu+MD84MyzzLdso2l3FRBrDx3EL8/6w/RASAyM6iSCYtBUWEx7DCah0V0UA2ws9X4+h8/laxh8vgddQAAcBPw3mJYIgQ5mmqUjVBDsKoMh1RXMAGxu2H0yTf0hnYHP1eqFNYcfnF+AqY025wgjINYefll+aY5CFky6iAFhYOgkgmKwGDSmPAaQwOgsBpQjm8FtTnyMz+Fz+Rq+lsAJni4ggESIrmVa4gChk5lugyA6gi4nCA4q1RVM02xy3mmLi/d/5xd+AbrHGJDqIH5pL4guIiQGhE7iKCUopg4VFl3FICYaRHAUA2ws9X4+j4D5Gr6Wwed78T0JgIOBg4KNCSFwoHDAMO2qjmB6+ocBge/S4oWQONqY4tjL00WExEAwIJz7EBSDpMJi4IIMQSQ0jmgGlSJAY6n38zl8LgPP1zJ1Ejzfky4gAA4KutcJYlriZ+EEmZ/tD9FF4XP8TS6qkxgIjkoVFIPElEdYTCEMHqExkATHoFIEaCz1fj6Hz+Vr+Fq+D4PPAcD3pguYWlUnEMLffVp6lwRVUGraU4FxFBMaxaC2Jj6HQedrGHi+Bx3K9/xP7YJ3CU57by0CWgS0CGgR0CKgRUCLgBYBLQJaBLQIaBHQIqBFQIuAFgEtAloEtAhoEdAioEVAi4AWgf/EEfh/cXZrfHfR2K8AAAAASUVORK5CYII=";
    ctx.drawImage(sprite, this.x, this.y);
    return imgWidth;
};

/*
Enemy.prototype.spawn = function(direction) {
    Enemy_pos = [this.x,this.y];
    if (direction == right) {
        this.x = (Math.floor(Math.random() *(240 - 120 + 1) + 120))*dt;
    }
    if (direction == left) {
       this.x = -(Math.floor(Math.random() *(240 - 120 + 1) + 120))*dt; 
    }
}
*/

// Now write your own player class
var Player = function([x,y],[Max,Min],score){
    Enemy.call(this,[x,y],[Max,Min]);
    this.pl_speed = [Max,Min];
    this.score = score; 
	
};

// This class requires an update(), render() and
// a handleInput() method.
Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;

Player.prototype.incrementScore = function() {
    this.score++;
}
Player.prototype.update = function(dt) {
	
    if(this.y <= (this.cHeight -626)) {
        this.reset();
        //const incrementScore = () => {this.score++};
        this.incrementScore();
        console.log(this.score);
		document.getElementById("display_score").innerHTML = player.getScore();
        player.gameMessages();
    }
	
	else if((this.x >= ((this.getCanvas()[0])-85))  && (this.y >= (this.getCanvas()[1] -176))) {
		 this.x = this.getCanvas()[0]-85;
         this.y = this.getCanvas()[1] -176;
     }
	 
	 else if((this.x > 0)  && (this.y >= (this.getCanvas()[1] -176))) {
         this.y = this.getCanvas()[1] -176;
     }
	
	 else if((this.y < (this.getCanvas()[1] -176)) && (this.x >= (this.getCanvas()[0]-85))){
		 this.x = this.getCanvas()[0]-85;
     }
	 
	 else if((this.x <= 0) && (this.y <= (this.getCanvas()[1] -176))) {
         this.x = 0;
    }

    else if((this.x >= ((this.getCanvas()[0])-85)) && (this.y >= (this.getCanvas()[1] -176))) {
        this.x = this.getCanvas()[0]-85;
		this.y = this.getCanvas()[1] -176;
    }
	
    else if((this.x <= 0) && (this.y >= (this.getCanvas()[1] -176))) {
         this.x = 0;
		 this.y = this.getCanvas()[1] -176;
    }
	
   return this.score; 
};

Player.prototype.reset = function() {
		this.x = Math.round(parseInt(this.getCanvas()[0])/2.53);
		this.y = Math.round(parseInt(this.getCanvas()[1])/1.515);
		playerPosition = [this.x,this.y];
		return playerPosition;
}

Player.prototype.getScore = function() {
    console.log(this.score);
    return this.score;
}

Player.prototype.gameMessages = function() {
    var i = 30
    if (this.score >= 5) {
        //alert("YOU WIN, CONGRATS!");
        document.getElementById('WinGame').style.display = 'block';
        ctx = null ;
        setTimeout(function(){document.location.reload();}, 5000);
    }
    else if (this.score < 0) {
        document.getElementById("display_score").innerHTML = 0;
        //alert("GAME OVER!");
        document.getElementById('LoseGame').style.display = 'block';
        ctx = null ;
        setTimeout(function(){document.location.reload();}, 5000);   
    }

}

Player.prototype.playerSelection = function() {
	
}

Player.prototype.getCanvas = function() {
	canvasDim = [this.cWidth, this.cHeight];
	return canvasDim;
};
	
Player.prototype.render = function() {
    var img = new Image();
	//img.src = "data:image/png;base64,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";
	img.src = document.getElementById("getImagePlayerSelected").innerHTML;
    ctx.drawImage(img, this.x, this.y);
};

Player.prototype.handleInput = function(event) {
    switch (event)  
    {

    case "left":
        this.x-= this.pl_speed[0];
        break;
    case "right":
        this.x += this.pl_speed[0];
        break;
    case "up":
        this.y -= this.pl_speed[1];
        break;
    case "down":
        this.y += this.pl_speed[1];
        break;
    default:
        //pass
        break;
    }

}

var player = new Player([200,400],[30,30],0);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
};
player.handleInput(allowedKeys[e.keyCode]);
});
