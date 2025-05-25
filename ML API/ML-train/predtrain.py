import torch
import torchaudio
import librosa as lbr

from pathlib import Path
from transformers import AutoModel, AutoTokenizer

PATHS = {
    "TRAIN": Path("./data-project/train"),
    "TEST": Path("./data-project/test"),
    "DATA": Path("./data-project/")
}


y, sr = lbr.load(PATHS["TEST"] / "0a8cadd7-3e31-4157-b06c-55807110c487.mp3")
print(y, sr)


tokenizer = AutoTokenizer.from_pretrained("cointegrated/rubert-tiny2")
model = AutoModel.from_pretrained("cointegrated/rubert-tiny2")

print(tokenizer, model)